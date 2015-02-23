/*
  {
    "meta": {
      "page": "7",
      "totalItems": "250",
      "totalPages": "15"
    }
  }

  Payload agnostic.
*/

export default interface DecoratorMetadata {
  page:       string,
  fooBar:     Function,
  totalItems: number,
  totalPages: number,
}
