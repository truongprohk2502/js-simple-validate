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
import { isBase32 } from "js-simple-validate";

console.log(isBase32("JBSWY3DPEBLW64TMMQQQ====")); // true
console.log(isBase32("invalid base32")); // false
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

### `isPort(input)`

Returns a Boolean indicating whether `input` is port number or not.
Port number must be between 0 and 65535

```typescript
import { isPort } from "js-simple-validate";

console.log(isPort("80")); // true
console.log(isPort("3000")); // true
console.log(isPort("100000")); // false
console.log(isPort("0080")); // false
console.log(isPort("-3000")); // false
```

### `isPostalCode(input[, locale])`

Returns a Boolean indicating whether `input` is postal code or not.

- `locale`: is a `Locale` of postal code. If not set, it will check all locales until match the `input` string.

```typescript
import { isPostalCode } from "js-simple-validate";

console.log(isPostalCode("94812-4444", "US")); // true
console.log(isPostalCode("94812-444", "US")); // false
```

### `isMAC(input[, options])`

Returns a Boolean indicating whether `input` is MAC address or not.

- `options.noSeparators`: is a `boolean` and defaults to `false`. If set to `true`, it will allow MAC addresses without separators.

```typescript
import { isMAC } from "js-simple-validate";

console.log(isMAC("00:1A:2B:3C:4D:5E")); // true
console.log(isMAC("A1-B2-C3-D4-E5-F6")); // true
console.log(isMAC("001A.2B3C.4D5E")); // true
console.log(isMAC("001A2B3C4D5E", { noSeparators: true })); // true
console.log(isMAC("001A2B3C4D5E")); // false
console.log(isMAC("A1:B2C3.D4-E5F6")); // false
console.log(isMAC("GG:XX:YY:ZZ:4D:5E")); // false
```

### `isSemVer(input)`

Returns a Boolean indicating whether `input` is Semantic Version or not.

```typescript
import { isSemVer } from "js-simple-validate";

console.log(isSemVer("1.0.0")); // true
console.log(isSemVer("1.2.3-alpha")); // true
console.log(isSemVer("2.0.0-beta.1")); // true
console.log(isSemVer("2.1.0+build.123")); // true
console.log(isSemVer("1")); // false
console.log(isSemVer("1.01.1")); // false
console.log(isSemVer("alpha+beta")); // false
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

### `isDate(input[, options])`

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

### `isDecimal(input[, options])`

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

### `isNumeric(input[, options])`

Returns a Boolean indicating whether `input` is numeric number or not.

- `options.noSymbols`: is a `boolean` and defaults to `false`. If set to `true`, it will not allow any symbols except digits.

```typescript
import { isNumeric } from "js-simple-validate";

console.log(isNumeric("123")); // true
console.log(isNumeric("-123.5")); // true
console.log(isNumeric("+123.5000")); // true
console.log(isNumeric("--123.4")); // false
console.log(isNumeric("123.4", { noSymbols: true })); // false
console.log(isNumeric("-123", { noSymbols: true })); // false
```

### `isInt(input[, options])`

Returns a Boolean indicating whether `input` is integer number or not.

- `options.leadingZeros`: is a `boolean` and defaults to `false`. If set to `true`, it will allow leading zeros in integer.
- `options.min`: is a `number`. Is the minimum value of integer.
- `options.max`: is a `number`. Is the maximum value of integer.
- `options.gt`: is a `number`. The integer must be greater than this value.
- `options.lt`: is a `number`. The integer must be less than this value.

```typescript
import { isInt } from "js-simple-validate";

console.log(isInt("123")); // true
console.log(isInt("123.5")); // false
console.log(isInt("0012")); // false
console.log(isInt("0012", { leadingZeros: true })); // true
console.log(isInt("3", { min: 1, max: 3 })); // true
console.log(isInt("5", { min: 1, max: 3 })); // false
console.log(isInt("2", { gt: 1, lt: 3 })); // true
console.log(isInt("3", { gt: 1, lt: 3 })); // false
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

### `isOctal(input, algorithm)`

Returns a Boolean indicating whether `input` is octal number or not.

```typescript
import { isOctal } from "js-simple-validate";

console.log(isOctal("01234567")); // true
console.log(isOctal("0o1234567")); // true
console.log(isOctal("AB1010")); // false
console.log(isOctal("0x01234567")); // false
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

### `isHSL(input)`

Returns a Boolean indicating whether `input` is HSL color or not.

```typescript
import { isHSL } from "js-simple-validate";

console.log(isHSL("hsl(120,100%,50%)")); // true
console.log(isHSL("hsl(120deg 100% 50%)")); // true
console.log(isHSL("hsla(-0.5e2rad -100% -2.5%)")); // true
console.log(isHSL("hsl(120,100,50)")); // false
console.log(isHSL("hsl(120% 100% 50%)")); // false
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

### `isLuhnNumber(input)`

Returns a Boolean indicating whether `input` is passing Luhn algorithm check or not.
Luhn algorithm is being used for checking the accuracy of MasterCard, American Express (AMEX), Visa number.

```typescript
import { isLuhnNumber } from "js-simple-validate";

console.log(isLuhnNumber("555555-555555-4444")); // true
console.log(isLuhnNumber("4111111111111111")); // true
console.log(isLuhnNumber("12345678")); // false
console.log(isLuhnNumber("dummy-text")); // false
```

### `isJWT(input)`

Returns a Boolean indicating whether `input` is JWT token or not.

```typescript
import { isJWT } from "js-simple-validate";

console.log(isJWT("5eyJhbGciOi9.eyJzdWIiOiWF0TE2MjM5MDIyfQ.wpMeJf36POk6yJ5c")); // true
console.log(isJWT("anh.yêu.em")); // false
console.log(isJWT("abc.def.ghy.jwt")); // false
```

### `isIP(input[, version])`

Returns a Boolean indicating whether `input` is IP address or not.

- `version`: specify IP version. Is one of `['IPv4', 'IPv6']`. If not set, it will check both v4 and v6 format.

```typescript
import { isIP } from "js-simple-validate";

console.log(isIP("192.168.1.12")); // true
console.log(isIP("192.168.1.12", "IPv6")); // false
console.log(isIP("111:222:333:444:555:666:777:888")); // true
console.log(isIP("12:23::", "IPv6")); // true
console.log(isIP("1:2:3:4:5:6:192.168.1.12")); // true
```

### `isIPRange(input[, version])`

Returns a Boolean indicating whether `input` is IP range or not.
IP address range has an IP address and subnet mask separated by `/`.

- `version`: specify IP version. Is one of `['IPv4', 'IPv6']`. If not set, it will check both v4 and v6 format.

```typescript
import { isIPRange } from "js-simple-validate";

console.log(isIPRange("192.168.1.12/20")); // true
console.log(isIPRange("192:168::/128", "IPv6")); // true
console.log(isIPRange("192.168.1.12/-20")); // false
console.log(isIPRange("12:23::/200", "IPv6")); // false
```

### `isLatLong(input[, options])`

Returns a Boolean indicating whether `input` is LatLong value or not.
LatLong contains latitude and longitude separated by comma.
There are 2 formats: `12.123456,175.234125` and `12° 50' 57.4548'' N,24° 26' 0.9384'' E`

- `options.checkDMS`: is `boolean`, defaults to `false`. If set to `true`, it will check by DMS format. If not set, it will check for both formats.
- `options.dmsUnits`: is `object`, defaults to `{ degree: "°", minute: "'", second: "''" }`. Is the unit of DMS.

```typescript
import { isLatLong } from "js-simple-validate";

console.log(isLatLong("12.849293,24.433594")); // true
console.log(isLatLong("12.849293,24.433594", { checkDMS: true })); // false
console.log(isLatLong("12° 50' 57.4548'' N,24° 26' 0.9384'' E")); // true
console.log(
  isLatLong("12deg 50min 57.4548sec N, 24deg 26min 0.9384sec E", {
    dmsUnits: { degree: "deg", minute: "min", second: "sec" },
  })
); // true
```

### `isMobilePhone(input, locale)`

Returns a Boolean indicating whether `input` is mobile phone number or not.

- `options.locale`: is `Locale` or array of `Locale`. Is one of `['en-US', 'vi-VN', ...]`. All supported locales are extracting at `MobilePhoneLocale` type.

```typescript
import { isMobilePhone } from "js-simple-validate";

console.log(isMobilePhone("0789550792", "vi-VN")); // true
console.log(isMobilePhone("+84789550792", "vi-VN")); // true
console.log(isMobilePhone("(555) 555-1234", "en-US")); // true
console.log(isMobilePhone("1234-555-1234", ["vi-VN", "en-US"])); // false
```

### `isMongoId(input, locale)`

Returns a Boolean indicating whether `input` is mongo id or not.

```typescript
import { isMongoId } from "js-simple-validate";

console.log(isMongoId("6592008029c8c3e4dc76256c")); // true
console.log(isMongoId("0x6592008029c8c3e4dc76256c")); // false
console.log(isMongoId("65920")); // false
```

## License

MIT
