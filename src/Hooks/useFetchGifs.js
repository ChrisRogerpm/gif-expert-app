import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // // useEffect es un espacio para poder ejectuar acciones solo cuando el renderizado del componente se hace una primera vez.
    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    }, [category]);
    return state;
}