ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ

exports - dd...

module.exports<br>
모듈화해서 내보내는거라 하나만 되고 다 여러개를 보낼꺼면 보낼때 묶어야함

```
module.exports = {
    a,
    info: exports.info,
    verbose: exports.verbose
};
```
이런식으로  