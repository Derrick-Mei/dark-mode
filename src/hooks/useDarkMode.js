import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
    const [value, setPersistentValue] = useLocalStorage('dark', false)
    return [value, setPersistentValue]
}
