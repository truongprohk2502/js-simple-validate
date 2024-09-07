const mimeTypeSimple =
  /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i;
const mimeTypeText =
  /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i;
const mimeTypeMultipart =
  /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;

const isMimeType = (input: any) => {
  if (typeof input !== "string") return false;
  return (
    mimeTypeSimple.test(input) ||
    mimeTypeText.test(input) ||
    mimeTypeMultipart.test(input)
  );
};

export { isMimeType };
