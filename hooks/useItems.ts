import { useCallback, useState } from "react";

export default function useItems() {
    const [items, setItems] = useState();

    const getItems = useCallback(() => {

    }, [])

    return {
        items,
        getItems,
    }
}