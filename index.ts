type FixMeLater = any

export default function dotpath (str: string) {
  const parts = str.toString().split('.')
  const len = parts.length

  return function parse (obj:FixMeLater) {
    let testKey

    for (let i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
