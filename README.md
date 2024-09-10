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

## Menu

- [`isAlphabet`](#is-alphabet)
- [`isAscii`](#is-ascii)
- [`isJsonObject`](#is-json-object)
- [`isCrockfordBase32`](#is-crockford-base-32)
- [`isBase32`](#is-base-32)
- [`isBase58`](#is-base-58)
- [`isBase64`](#is-base-64)
- [`isBitcoinAddress`](#is-bitcoin-address)
- [`isEthereumAddress`](#is-ethereum-address)
- [`isPort`](#is-port)
- [`isFQDN`](#is-fqdn)
- [`isURL`](#is-url)
- [`isGitURL`](#is-git-url)
- [`isEmail`](#is-email)
- [`isMailtoURI`](#is-mailto-uri)
- [`isPostalCode`](#is-postal-code)
- [`isMAC`](#is-mac)
- [`isSemVer`](#is-sem-ver)
- [`isDataURI`](#is-data-uri)
- [`isDate`](#is-date)
- [`isTime`](#is-time)
- [`isDecimal`](#is-decimal)
- [`isNumeric`](#is-numeric)
- [`isInt`](#is-int)
- [`isFullWidth`](#is-full-width)
- [`isHalfWidth`](#is-half-width)
- [`isSurrogatePair`](#is-surrogate-pair)
- [`isHash`](#is-hash)
- [`isOctal`](#is-octal)
- [`isHexadecimal`](#is-hexadecimal)
- [`isHexColor`](#is-hex-color)
- [`isHSL`](#is-hsl)
- [`isRgbColor`](#is-rgb-color)
- [`isLuhnNumber`](#is-luhn-number)
- [`isCreditCard`](#is-credit-card)
- [`isJWT`](#is-jwt)
- [`isIP`](#is-ip)
- [`isIPRange`](#is-ip-range)
- [`isMagnetURI`](#is-magnet-uri)
- [`isLatLong`](#is-lat-long)
- [`isMobilePhone`](#is-mobile-phone)
- [`isPassport`](#is-passport)
- [`isMongoId`](#is-mongo-id)
- [`isMimeType`](#is-mime-type)
- [`isUUID`](#is-uuid)
- [`isULID`](#is-ulid)
- [`isIMEI`](#is-imei)
- [`isEAN`](#is-ean)

## API

### <a id="is-alphabet" href="#is-alphabet">`isAlphabet(input)`</a>

Returns a Boolean indicating whether `input` is alphabet characters or not.

```typescript
import { isAlphabet } from "js-simple-validate";

console.log(isAlphabet("εηglish", "en-US")); // false
console.log(isAlphabet("English", "en-US")); // true
console.log(isAlphabet("русский", "ru-RU")); // true
console.log(isAlphabet("한국어", "ko-KR")); // true
```

### <a id="is-ascii" href="#is-ascii">`isAscii(input)`</a>

Returns a Boolean indicating whether `input` is ASCII characters or not.

```typescript
import { isAscii } from "js-simple-validate";

console.log(isAscii("En99__--__?=([&!*])")); // true
console.log(isAscii("✂️ Copy and 📋 Paste Emoji 👍")); // false
console.log(isAscii("русский")); // false
console.log(isAscii("한국어")); // false
```

### <a id="is-json-object" href="#is-json-object">`isJsonObject(input)`</a>

Returns a Boolean indicating whether `input` is a valid JSON object or not.

```typescript
import { isJsonObject } from "js-simple-validate";

console.log(isJsonObject("{"key":1}")); // true
console.log(isJsonObject("[{"x":1,"y":1}]")); // true
console.log(isJsonObject("[1,2,3]")); // false
```

### <a id="is-crockford-base-32" href="#is-crockford-base-32">`isCrockfordBase32(input)`</a>

Returns a Boolean indicating whether `input` is Base32 string as Crockford algorithm or not.

```typescript
import { isCrockfordBase32 } from "js-simple-validate";

console.log(
  isCrockfordBase32(
    "AHM6A83HENMP6TS0C9S6YXVE41K6YY10D9TPTW3K41QQCSBJ41T6GS90DHGQMY90CHQPEBG"
  )
); // true
console.log(isCrockfordBase32("invalidbase32")); // false
```

### <a id="is-base-32" href="#is-base-32">`isBase32(input)`</a>

Returns a Boolean indicating whether `input` is Base32 string or not.

```typescript
import { isBase32 } from "js-simple-validate";

console.log(isBase32("JBSWY3DPEBLW64TMMQQQ====")); // true
console.log(isBase32("invalid base32")); // false
```

### <a id="is-base-58" href="#is-base-58">`isBase58(input)`</a>

Returns a Boolean indicating whether `input` is Base58 string or not.

```typescript
import { isBase58 } from "js-simple-validate";

console.log(isBase58("L4baC6eDpmHZ5cmx2BMHZQPvwnokx9yPhE6jFGJBNHz4SU4ez9qH")); // true
console.log(isBase58("invalidbase58")); // false
```

### <a id="is-base-64" href="#is-base-64">`isBase64(input[, options])`</a>

Returns a Boolean indicating whether `input` is Base64 string or not.

- `options.isUrlSafe`: check with Url Safe Base64 format

```typescript
import { isBase64 } from "js-simple-validate";

console.log(isBase64("SGVsbG8sIFdvcmxkIQ==")); // true
console.log(isBase64("SGVsbG8sIFdvcmxkIQ", { isUrlSafe: true })); // true
console.log(isBase64("invalid base64")); // false
console.log(isBase64("SGVsbG8sIFdvcmxkIQ==", { isUrlSafe: true })); // false
```

### <a id="is-bitcoin-address" href="#is-bitcoin-address">`isBitcoinAddress(input)`</a>

Returns a Boolean indicating whether `input` is Bitcoin address or not.

```typescript
import { isBitcoinAddress } from "js-simple-validate";

console.log(isBitcoinAddress("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")); // true
console.log(isBitcoinAddress("invalid BTC")); // false
```

### <a id="is-ethereum-address" href="#is-ethereum-address">`isEthereumAddress(input)`</a>

Returns a Boolean indicating whether `input` is Ethereum address or not.

```typescript
import { isEthereumAddress } from "js-simple-validate";

console.log(isEthereumAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")); // true
console.log(isEthereumAddress("71C7656EC7ab88b098defB751B7401B5f6d8976F")); // false
console.log(isEthereumAddress("0x12345")); // false
```

### <a id="is-port" href="#is-port">`isPort(input)`</a>

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

### <a id="is-fqdn" href="#is-fqdn">`isFQDN(input[, options])`</a>

Returns a Boolean indicating whether `input` is `Fully qualified domain name (FQDN)` or not.

- `options.requireTopLevelDomain`: is a `boolean` and defaults to `false`. If set to `true`, it will require `Top level domain (TLD)` part at the end.
- `options.allowUnderscores`: is a `boolean` and defaults to `false`. If set to `true`, the FQDN can contain underscore character.
- `options.allowTrailingDot`: is a `boolean` and defaults to `false`. If set to `true`, the FQDN can have dot character at the end.
- `options.allowWildcard`: is a `boolean` and defaults to `false`. If set to `true`, the FQDN can have wildcard character (\*).
- `options.allowNumericTLD`: is a `boolean` and defaults to `false`. If set to `true`, the `Top level domain (TLD)` can contains digits.
- `options.ignoreMaxLength`: is a `boolean` and defaults to `false`. If set to `true`, each part of FQDN can have characters length greater than 63.

```typescript
import { isFQDN } from "js-simple-validate";

console.log(isFQDN("www.google.com")); // true
console.log(isFQDN("www.google_meet.com", { allowUnderscores: true })); // true
console.log(
  isFQDN("www.google.com123", {
    requireTopLevelDomain: true,
    allowNumericTLD: true,
  })
); // true
console.log(isFQDN("*.netlify.app", { allowWildcard: true })); // true
console.log(isFQDN("www.g😃😃gle.com")); // false
```

### <a id="is-url" href="#is-url">`isURL(input[, options])`</a>

Returns a Boolean indicating whether `input` is URL or not.

- `options.requireProtocol`: is a `boolean` and defaults to `false`. If set to `true`, it will require protocol of URL.
- `options.allowFragments`: is a `boolean` and defaults to `false`. If set to `true`, the URL can contain fragment.
- `options.allowQueries`: is a `boolean` and defaults to `false`. If set to `true`, the URL can contain query components.
- `options.allowRelativeProtocol`: is a `boolean` and defaults to `false`. If set to `true`, the URL can start with relative protocol.

```typescript
import { isURL } from "js-simple-validate";

console.log(isURL("https://www.google.com:3000")); // true
console.log(isURL("http://[1080:0:0:0:8:800:200C:417A]:8000")); // true
console.log(isURL("https://username:password@github.com")); // true
console.log(isURL("//www.google.com", { allowRelativeProtocol: true })); // true
console.log(
  isURL("https://www.google.com#basic", {
    allowFragments: true,
  })
); // true
console.log(
  isURL("https://www.google.com?title=title", {
    allowQueries: true,
  })
); // true
console.log(isURL("www.google.com", { requireProtocol: true })); // false
```

### <a id="is-git-url" href="#is-git-url">`isGitURL(input)`</a>

Returns a Boolean indicating whether `input` is Git URL or not.

```typescript
import { isGitURL } from "js-simple-validate";

console.log(isGitURL("git://github.com/repo/is-git-url.git")); // true
console.log(isGitURL("ssh://login@server.com:12345/repository.git")); // true
console.log(isGitURL("https://github.com/repo/my-app.git")); // true
console.log(isGitURL("github.com/repo/my-app.git")); // false
console.log(isGitURL("https://github.com/repo/my-app")); // false
```

### <a id="is-email" href="#is-email">`isEmail(input)`</a>

Returns a Boolean indicating whether `input` is email or not.

```typescript
import { isEmail } from "js-simple-validate";

console.log(isEmail("firstname.lastname@example.com")); // true
console.log(isEmail("email@subdomain.example.com")); // true
console.log(isEmail("email..email@example.com")); // false
console.log(isEmail("email@-example.com")); // false
console.log(isEmail("あいうえお@example.com")); // false
```

### <a id="is-mailto-uri" href="#is-mailto-uri">`isMailtoURI(input)`</a>

Returns a Boolean indicating whether `input` is Mailto URI or not.

```typescript
import { isMailtoURI } from "js-simple-validate";

console.log(
  isMailtoURI(
    "mailto:foo@email.com?subject=my-subject&body=my-body&cc=bar@email.com"
  )
); // true
console.log(
  isMailtoURI(
    "mailto:-invalid-email-@email.com?title=my-subject&body=my-body&cc=bar@email.com"
  )
); // false
```

### <a id="is-postal-code" href="#is-postal-code">`isPostalCode(input[, locale])`</a>

Returns a Boolean indicating whether `input` is postal code or not.

- `locale`: is a `Locale` of postal code. If not set, it will check all locales until match the `input` string.

```typescript
import { isPostalCode } from "js-simple-validate";

console.log(isPostalCode("94812-4444", "US")); // true
console.log(isPostalCode("94812-444", "US")); // false
```

### <a id="is-mac" href="#is-mac">`isMAC(input[, options])`</a>

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

### <a id="is-sem-ver" href="#is-sem-ver">`isSemVer(input)`</a>

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

### <a id="is-data-uri" href="#is-data-uri">`isDataURI(input)`</a>

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

### <a id="is-date" href="#is-date">`isDate(input[, options])`</a>

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

### <a id="is-time" href="#is-time">`isTime(input[, options])`</a>

Returns a Boolean indicating whether `input` is Time string or not.

- `options.hourFormat`: is the format of hour, one of `['12', '24']`. If not set, it will check both hour `12` and `24` formats.
- `options.withSeconds`: is a `boolean` and defaults to `false`. If set to `true`, it will check exactly time contains seconds.

```typescript
import { isTime } from "js-simple-validate";

console.log(isTime("23:12:30")); // true
console.log(isTime("00:12", { hourFormat: "12" })); // true
console.log(isTime("23:12", { hourFormat: "12" })); // false
console.log(isTime("23:12:30", { withSeconds: true })); // true
console.log(isTime("23:12", { withSeconds: true })); // false
```

### <a id="is-decimal" href="#is-decimal">`isDecimal(input[, options])`</a>

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

### <a id="is-numeric" href="#is-numeric">`isNumeric(input[, options])`</a>

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

### <a id="is-int" href="#is-int">`isInt(input[, options])`</a>

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

### <a id="is-full-width" href="#is-full-width">`isFullWidth(input)`</a>

Returns a Boolean indicating whether `input` only has full-width characters or not.

```typescript
import { isFullWidth } from "js-simple-validate";

console.log(isFullWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")); // true
console.log(isFullWidth("Alice was beginning")); // false
console.log(isFullWidth("日本語組版処理の要件")); // true
```

### <a id="is-half-width" href="#is-half-width">`isHalfWidth(input)`</a>

Returns a Boolean indicating whether `input` only has half-width characters or not.

```typescript
import { isHalfWidth } from "js-simple-validate";

console.log(isHalfWidth("Alice was beginning")); // true
console.log(isHalfWidth("Ａｌｉｃｅ　ｗａｓ　ｂｅｇｉｎｎｉｎｇ")); // false
console.log(isHalfWidth("ｻﾝﾌﾟﾙ")); // true
console.log(isHalfWidth("日本語組版処理の要件")); // false
```

### <a id="is-surrogate-pair" href="#is-surrogate-pair">`isSurrogatePair(input)`</a>

Returns a Boolean indicating whether `input` only has surrogate pair characters or not.
Surrogate pair is represented by 2 characters of UTF-16

```typescript
import { isSurrogatePair } from "js-simple-validate";

console.log(isSurrogatePair("😁🍕")); // true
console.log(isSurrogatePair("123")); // false
```

### <a id="is-hash" href="#is-hash">`isHash(input, algorithm)`</a>

Returns a Boolean indicating whether `input` is valid hash string based on hash algorithm or not.

- `algorithm`: is a hash algorithm. Is one of `['crc32', 'crc32b', 'md4', 'md5', 'ripemd128', 'ripemd160', 'sha1', 'sha256', 'sha384', 'sha512', 'tiger128', 'tiger160', 'tiger192'`.

```typescript
import { isHash } from "js-simple-validate";

console.log(isHash("6aaeb5af1a33e5c77e546224eb33de9", "md5")); // true
console.log(isHash("6aaeb5af", "crc32")); // true
console.log(isHash("ｻﾝﾌﾟﾙ", "crc32")); // false
console.log(isHash("6aaeb5af1a33e5c7", "sha256")); // false
```

### <a id="is-octal" href="#is-octal">`isOctal(input, algorithm)`</a>

Returns a Boolean indicating whether `input` is octal number or not.

```typescript
import { isOctal } from "js-simple-validate";

console.log(isOctal("01234567")); // true
console.log(isOctal("0o1234567")); // true
console.log(isOctal("AB1010")); // false
console.log(isOctal("0x01234567")); // false
```

### <a id="is-hexadecimal" href="#is-hexadecimal"">`isHexadecimal(input, algorithm)`</a>

Returns a Boolean indicating whether `input` is hexadecimal or not.

```typescript
import { isHexadecimal } from "js-simple-validate";

console.log(isHexadecimal("AB0C5342F")); // true
console.log(isHexadecimal("0xAB0C5342F")); // true
console.log(isHexadecimal("0hAB0C5342F")); // true
console.log(isHexadecimal("XYZ")); // false
console.log(isHexadecimal("0bABC123")); // false
```

### <a id="is-hex-color" href="#is-hex-color">`isHexColor(input)`</a>

Returns a Boolean indicating whether `input` is HEX color or not.

```typescript
import { isHexColor } from "js-simple-validate";

console.log(isHexColor("FFAABB00")); // true
console.log(isHexColor("FFAA00")); // true
console.log(isHexColor("#FFF")); // true
console.log(isHexColor("#VCLVCL")); // false
```

### <a id="is-hsl" href="#is-hsl">`isHSL(input)`</a>

Returns a Boolean indicating whether `input` is HSL color or not.

```typescript
import { isHSL } from "js-simple-validate";

console.log(isHSL("hsl(120,100%,50%)")); // true
console.log(isHSL("hsl(120deg 100% 50%)")); // true
console.log(isHSL("hsla(-0.5e2rad -100% -2.5%)")); // true
console.log(isHSL("hsl(120,100,50)")); // false
console.log(isHSL("hsl(120% 100% 50%)")); // false
```

### <a id="is-rgb-color" href="#is-rgb-color">`isRgbColor(input)`</a>

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

### <a id="is-luhn-number" href="#is-luhn-number">`isLuhnNumber(input)`</a>

Returns a Boolean indicating whether `input` is passing Luhn algorithm check or not.
Luhn algorithm is being used for checking the accuracy of MasterCard, American Express (AMEX), Visa number.

```typescript
import { isLuhnNumber } from "js-simple-validate";

console.log(isLuhnNumber("555555-555555-4444")); // true
console.log(isLuhnNumber("4111111111111111")); // true
console.log(isLuhnNumber("12345678")); // false
console.log(isLuhnNumber("dummy-text")); // false
```

### <a id="is-credit-card" href="#is-credit-card">`isCreditCard(input[, provider])`</a>

Returns a Boolean indicating whether `input` is valid Credit card number or not.

- `provider`: is `provider` name of credit card. Is one of `['amex' | 'dinersclub' | 'discover' | 'jcb' | 'mastercard' | 'unionpay' | 'visa']`. All supported providers are extracted at `CreditCardType` type.

```typescript
import { isCreditCard } from "js-simple-validate";

console.log(isCreditCard("6212345678900000003")); // true
console.log(isCreditCard("378282246310005", "amex")); // true
console.log(isCreditCard(isCreditCard("2222420000001113", "mastercard"))); // true
console.log(isCreditCard("12345678")); // false
console.log(isCreditCard("dummy-text")); // false
```

### <a id="is-jwt" href="#is-jwt">`isJWT(input)`</a>

Returns a Boolean indicating whether `input` is JWT token or not.

```typescript
import { isJWT } from "js-simple-validate";

console.log(isJWT("5eyJhbGciOi9.eyJzdWIiOiWF0TE2MjM5MDIyfQ.wpMeJf36POk6yJ5c")); // true
console.log(isJWT("anh.yêu.em")); // false
console.log(isJWT("abc.def.ghy.jwt")); // false
```

### <a id="is-ip" href="#is-ip">`isIP(input[, version])`</a>

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

### <a id="is-ip-range" href="#is-ip-range">`isIPRange(input[, version])`</a>

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

### <a id="is-magnet-uri" href="#is-magnet-uri">`isMagnetURI(input)`</a>

Returns a Boolean indicating whether `input` is Magnet URI or not.

```typescript
import { isMagnetURI } from "js-simple-validate";

console.log(
  isMagnetURI(
    "magnet:?xt=urn:btih:5dee65101db281ac9c46344cd6b175cdcad53426&dn=download"
  )
); // true
console.log(isMagnetURI("magnet:?xt=urn:fake:5deecd6&dn=download")); // false
```

### <a id="is-lat-long" href="#is-lat-long">`isLatLong(input[, options])`</a>

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

### <a id="is-mobile-phone" href="#is-mobile-phone">`isMobilePhone(input, locale)`</a>

Returns a Boolean indicating whether `input` is mobile phone number or not.

- `locale`: is `Locale` or array of `Locale`. Is one of `['en-US', 'vi-VN', ...]`. All supported locales are extracted at `MobilePhoneLocale` type.

```typescript
import { isMobilePhone } from "js-simple-validate";

console.log(isMobilePhone("0789550792", "vi-VN")); // true
console.log(isMobilePhone("+84789550792", "vi-VN")); // true
console.log(isMobilePhone("(555) 555-1234", "en-US")); // true
console.log(isMobilePhone("1234-555-1234", ["vi-VN", "en-US"])); // false
```

### <a id="is-passport" href="#is-passport">`isPassport(input, locale)`</a>

Returns a Boolean indicating whether `input` is valid passport number or not.

- `locale`: is the country code of passport. Is one of `['JP', 'KR', 'US', ...]`. All supported locales are extracting at `PassportLocale` type.

```typescript
import { isPassport } from "js-simple-validate";

console.log(isPassport("123456789", "US")); // true
console.log(isPassport("AB1234567", "JP")); // true
```

### <a id="is-mongo-id" href="#is-mongo-id">`isMongoId(input, locale)`</a>

Returns a Boolean indicating whether `input` is mongo id or not.

```typescript
import { isMongoId } from "js-simple-validate";

console.log(isMongoId("6592008029c8c3e4dc76256c")); // true
console.log(isMongoId("0x6592008029c8c3e4dc76256c")); // false
console.log(isMongoId("65920")); // false
```

### <a id="is-mime-type" href="#is-mime-type">`isMimeType(input)`</a>

Returns a Boolean indicating whether `input` is mime type or not.

```typescript
import { isMimeType } from "js-simple-validate";

console.log(isMimeType("image/jpeg")); // true
console.log(isMimeType("text/plain; charset=UTF-8")); // true
console.log(isMimeType("multipart/form-data; boundary=aBoundaryString")); // true
```

### <a id="is-uuid" href="#is-uuid">`isUUID(input)`</a>

Returns a Boolean indicating whether `input` is UUID or not.

```typescript
import { isUUID } from "js-simple-validate";

console.log(isUUID("3522ac6c-aadd-4165-8e10-d384faa5e076")); // true
console.log(isUUID("3522ac6c:aadd:4165:8e10:d384faa5e076")); // false
console.log(isUUID("0929:f3ea:4df4:86b0:dedf")); // false
```

### <a id="is-ulid" href="#is-ulid">`isULID(input)`</a>

Returns a Boolean indicating whether `input` is ULID string or not.
ULID (Universally Unique Lexicographically Sortable Identifier) is the alternative of UUID. It can be sorted and cannot be duplicated.

```typescript
import { isULID } from "js-simple-validate";

console.log(isULID("01AN4Z07BY79KA1307SR9X4MV3")); // true
console.log(isULID("3522ac6c-aadd-4165-8e10-d384faa5e076")); // false
```

### <a id="is-imei" href="#is-imei">`isIMEI(input[, options])`</a>

Returns a Boolean indicating whether `input` is `IMEI` number or not.
The IMEI (International Mobile Equipment Identity) number is a unique 15-digit serial number for identifying a device.

- `options.allowHyphens`: is `boolean`, defaults to `false`. If set to `true`, it will check IMEI number that contains hyphens.

```typescript
import { isIMEI } from "js-simple-validate";

console.log(isIMEI("333909858444672")); // true
console.log(isIMEI("45-961095-155032-8", { allowHyphens: true })); // true
console.log(isIMEI("012345678912345")); // false
```

### <a id="is-ean" href="#is-ean">`isEAN(input)`</a>

Returns a Boolean indicating whether `input` is valid `EAN` number or not.
The International Article Number (also known as European Article Number or EAN) is a standard describing a barcode symbology and numbering system used in global trade to identify a specific retail product type, in a specific packaging configuration, from a specific manufacturer.
There are most common EAN standard: EAN-8, EAN-13 and EAN/UCC-14.

```typescript
import { isEAN } from "js-simple-validate";

console.log(isEAN("50123452")); // true
console.log(isEAN("5012345678900")); // true
console.log(isEAN("0123456789")); // false
```

## License

MIT
