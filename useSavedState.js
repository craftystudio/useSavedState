export default function useSadvedState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const savedValue =
        typeof window !== "undefined" && window.localStorage.getItem(key)
      return savedValue !== null ? JSON.parse(savedValue) : defaultValue
    })
    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
  }