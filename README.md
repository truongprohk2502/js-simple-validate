# js-simple-validate

The "js-simple-validate" package is a user-friendly and lightweight JavaScript library designed to simplify form validation on the client-side. With this package, developers can effortlessly validate form inputs to ensure data accuracy and enhance user experience.

Key features of "js-simple-validate" include:

- Seamless integration and minimal setup requirements for easy implementation.
- Support for validating various input types, including text, email, number, and password fields.
- Customizable error messages for informative feedback to users.
- Flexibility to perform both synchronous and asynchronous validation processes.
- Granular control over individual input validations or entire form validations.

## Installation

```sh
npm install js-simple-validate
```

## API

### `isAlphabet(input)`

Returns a Boolean indicating whether `input` is alphabet characters or not.

```typescript
import { isAlphabet } from "js-simple-validate";

console.log(isAlphabet("εηglish", "en-US")); // false
console.log(isAlphabet("English", "en-US")); // true
console.log(isAlphabet("русский", "ru-RU")); // true
console.log(isAlphabet("한국어", "ko-KR")); // true
```

### `isAscii(input)`

Returns a Boolean indicating whether `input` is ASCII characters or not.

```typescript
import { isAscii } from "js-simple-validate";

console.log(isAscii("En99__--__?=([&!*])")); // true
console.log(isAscii("✂️ Copy and 📋 Paste Emoji 👍")); // false
console.log(isAscii("русский")); // false
console.log(isAscii("한국어")); // false
```

### `isJsonObject(input)`

Returns a Boolean indicating whether `input` is a valid JSON object or not.

```typescript
import { isJsonObject } from "js-simple-validate";

console.log(isJsonObject("{"key":1}")); // true
console.log(isJsonObject("[{"x":1,"y":1}]")); // true
console.log(isJsonObject("[1,2,3]")); // false
```

### `isBase32(input)`

Returns a Boolean indicating whether `input` is Base32 string or not.

```typescript
import { isBase64 } from "js-simple-validate";

console.log(isBase64("JBSWY3DPEBLW64TMMQQQ====")); // true
console.log(isBase64("invalid base32")); // false
```

### `isBase64(input[, options])`

Returns a Boolean indicating whether `input` is Base64 string or not.

- `options.isUrlSafe`: check with Url Safe Base64 format

```typescript
import { isBase64 } from "js-simple-validate";

console.log(isBase64("SGVsbG8sIFdvcmxkIQ==")); // true
console.log(isBase64("SGVsbG8sIFdvcmxkIQ", { isUrlSafe: true })); // true
console.log(isBase64("invalid base64")); // false
console.log(isBase64("SGVsbG8sIFdvcmxkIQ==", { isUrlSafe: true })); // false
```

### `isBitcoinAddress(input)`

Returns a Boolean indicating whether `input` is Bitcoin address or not.

```typescript
import { isBitcoinAddress } from "js-simple-validate";

console.log(isBitcoinAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")); // true
console.log(isBitcoinAddress("invalid BTC")); // false
```

### `isEthereumAddress(input)`

Returns a Boolean indicating whether `input` is Ethereum address or not.

```typescript
import { isEthereumAddress } from "js-simple-validate";

console.log(isEthereumAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")); // true
console.log(isEthereumAddress("71C7656EC7ab88b098defB751B7401B5f6d8976F")); // false
console.log(isEthereumAddress("0x12345")); // false
```

### `isDataURI(input)`

Returns a Boolean indicating whether `input` is Data URI format or not.

```typescript
import { isDataURI } from "js-simple-validate";

console.log(isDataURI("data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==")); // true
console.log(isDataURI("data:text/plain,SGVsbG8sIFdvcmxkIQ==")); // true
console.log(isDataURI("data:image/gif;base64,R0lGOAAAA,AACkQBADs")); // true
console.log(isDataURI("data::text/plain,SGVsbG8sIFdvcmxkIQ==")); // false
console.log(isDataURI("text/plain,SGVsbG8sIFdvcmxkIQ==")); // false
console.log(isDataURI("data:text/plain;base64")); // false
```

### `isDate(input)`

Returns a Boolean indicating whether `input` is Date string or not.

- `options.format`: is a `string` and defaults to `YYYY/MM/DD`.
- `options.strictMode`: is a `boolean` and defaults to `false`. If set to `true`, it will check exactly specific format.

```typescript
import { isDate } from "js-simple-validate";

console.log(isDate("2024-12-25")); // true
console.log(isDate("2024/12/25")); // true
console.log(isDate("25.12.2024", { format: "DD.MM.YYYY", strictMode: true })); // true
console.log(isDate("25.12.2024", { format: "DD-MM-YYYY", strictMode: true })); // false
```

### `isDecimal(input)`

Returns a Boolean indicating whether `input` is decimal number or not.

- `options.digits`: is a `number` and defaults to `1`. Is the minimum digits of decimal.
- `options.force`: is a `boolean` and defaults to `false`. If set to `true`, it will check exactly a decimal that has dot symbol and digits.

```typescript
import { isDecimal } from "js-simple-validate";

console.log(isDecimal("123")); // true
console.log(isDecimal("-123.5")); // true
console.log(isDecimal("+123.5000")); // true
console.log(isDecimal("--123.4")); // false
console.log(isDecimal("123..4")); // false
console.log(isDecimal("123", { force: true })); // false
console.log(isDecimal("123.4", { digits: 3 })); // false
```

### `isFullWidth(input)`

Returns a Boolean indicating whether `input` only has full-width characters or not.

```typescript
import { isFullWidth } from "js-simple-validate";

console.log(isFullWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")); // true
console.log(isFullWidth("Alice was beginning")); // false
console.log(isFullWidth("日本語組版処理の要件")); // true
```

### `isHalfWidth(input)`

Returns a Boolean indicating whether `input` only has half-width characters or not.

```typescript
import { isHalfWidth } from "js-simple-validate";

console.log(isHalfWidth("Alice was beginning")); // true
console.log(isHalfWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")); // false
console.log(isHalfWidth("ｻﾝﾌﾟﾙ")); // true
console.log(isHalfWidth("日本語組版処理の要件")); // false
```

### `isHash(input, algorithm)`

Returns a Boolean indicating whether `input` is valid hash string based on hash algorithm or not.

- `algorithm`: is a hash algorithm. Is one of `['crc32', 'crc32b', 'md4', 'md5', 'ripemd128', 'ripemd160', 'sha1', 'sha256', 'sha384', 'sha512', 'tiger128', 'tiger160', 'tiger192'`.

```typescript
import { isHash } from "js-simple-validate";

console.log(isHash("6aaeb5af1a33e5c77e546224eb33de9", "md5")); // true
console.log(isHash("6aaeb5af", "crc32")); // true
console.log(isHash("ｻﾝﾌﾟﾙ", "crc32")); // false
console.log(isHash("6aaeb5af1a33e5c7", "sha256")); // false
```

### `isHexadecimal(input, algorithm)`

Returns a Boolean indicating whether `input` is hexadecimal or not.

```typescript
import { isHexadecimal } from "js-simple-validate";

console.log(isHexadecimal("AB0C5342F")); // true
console.log(isHexadecimal("0xAB0C5342F")); // true
console.log(isHexadecimal("0hAB0C5342F")); // true
console.log(isHexadecimal("XYZ")); // false
console.log(isHexadecimal("0bABC123")); // false
```

### `isHexColor(input)`

Returns a Boolean indicating whether `input` is HEX color or not.

```typescript
import { isHexColor } from "js-simple-validate";

console.log(isHexColor("FFAABB00")); // true
console.log(isHexColor("FFAA00")); // true
console.log(isHexColor("#FFF")); // true
console.log(isHexColor("#VCLVCL")); // false
```

### `isRgbColor(input)`

Returns a Boolean indicating whether `input` is RGB (or RGBA) color or not.

```typescript
import { isRgbColor } from "js-simple-validate";

console.log(isRgbColor("rgb(255,255,255)")); // true
console.log(isRgbColor("rgba(255,255,255,0.5)")); // true
console.log(isRgbColor("rgb(50%,50%,50%)")); // true
console.log(isRgbColor("rgb(300,300,300)")); // false
console.log(isRgbColor("rgb(200%,200%,200%)")); // false
console.log(isRgbColor("rgba(255,255,255,1.5)")); // false
```

## License

MIT
