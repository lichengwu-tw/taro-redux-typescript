// 扩展renderToString，把快照出来的html文件做排版
jest.mock("nerv-server", () => {
  const _renderToString = jest.requireActual("nerv-server").renderToString;
  const pretty = require("pretty");
  return {
    renderToString: element => {
      const compressedValue = _renderToString(element);
      return pretty(compressedValue);
    }
  };
});
