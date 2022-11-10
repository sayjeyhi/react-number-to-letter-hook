# react number to letter hook

A react hook to convert number to letter!

> A hook to convert number to letter


## Install

```bash
npm install --save react-number-to-letter-hook
```

## Usage

```tsx
import React, { useEffect } from "react";

// Import these items
import useNumberToLetter from "react-number-to-letter-hook";

const App = () => {
  const convert = useNumberToLetter({ thousand: "hezar", billion: "milllion"});

  useEffect(() => {
    const show = (str) => {
      console.log(str);
    };
  
    show(convert('0004'));
    show(convert('1'));
    show(convert('4'));
    show(convert('13'));
    show(convert('25'));
    show(convert('52'));
    show(convert('152'));
    show(convert('552'));
    show(convert('901'));
    show(convert('1901'));
    show(convert('1392'));
    show(convert('1002'));
    show(convert('10002'));
    show(convert('14402'));
    show(convert('10402'));
    show(convert('24402'));
    show(convert('244205'));
    show(convert('100244205'));
    show(convert('782138718'));
    show(convert('422138718'));
    show(convert('400000000'));
    show(convert('400000001'));
    show(convert('400020000'));
  });

  return (
    <div>
      Open console!
    </div>
  );
};
```

## Options: 

```typescript
type Params = {
  thousand: string,
  billion: string
};

```



## License

MIT

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
