import React, { useState, Fragment, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";

// 로직은 App.js에서만 다룰것임.
function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      // console.log(user)
      if (user) {
        // 로그인하면 로그인한 user를 받아서 저장함.
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args)
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  // profile수정시 firebase는 변경되나 연결되어있지 않은 nav는 rerender되지 않음.
  // 그래서 수정된 firebase정보로 react.js를 refresh해주는 함수를 만들었음.
  //  "UserObj가 너무 커서 react가 이게 update됐는지 헷깔리기 때문에 동작을 안하는 error"
  // userObj에서 쓰는 요소만 골라 담아 react가 판단하기 쉽게끔. 크기가 작은 object를 다시만들어서 해결.
  const refreshUser = () => {
    // console.log(authService.currentUser.displayName);
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args)
    });
  };
  // login state없애고 userObj 있냐 없냐로 대체함.=>render하나 줄임.
  return (
    <Fragment>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      <div className="footer">&copy; Nwitter {new Date().getFullYear()}</div>
    </Fragment>
  );
}

export default App;
