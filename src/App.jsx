import { useState } from 'react'


function App() {
  const [errorType, setErrorType] = useState(null);

  const throwError = (type) => {
    setErrorType(type);
    if (type === 'syntax') {
      // 模拟语法错误
      eval('console.log("Hello World"');
    } else if (type === 'reference') {
      // 模拟引用错误
      console.log(nonExistentVariable);
    } else if (type === 'type') {
      // 模拟类型错误
      null.f();
    } else if (type === 'custom') {
      // 模拟自定义错误
      throw new Error('这是一个自定义错误');
    }
  };

  return (
    <>
      <h1>测试 Sentry 错误捕获</h1>
      <button onClick={() => throwError('syntax')}>抛出语法错误</button>
      <button onClick={() => throwError('reference')}>抛出引用错误</button>
      <button onClick={() => throwError('type')}>抛出类型错误</button>
      <button onClick={() => throwError('custom')}>抛出自定义错误</button>
      {errorType && <p>当前错误类型: {errorType}</p>}
    </>
  );
}

export default App
