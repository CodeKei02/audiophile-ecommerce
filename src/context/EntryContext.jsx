import { createContext, useState, useEffect } from "react";

export const EntryContext = createContext();

export const EntryProvider = ({children}) => {
    const [entryViewed, setEntryViewed] = useState(() => {
        return localStorage.getItem("entryViewed") === "true";
    })

    useEffect(() => {
    if (entryViewed) {
        localStorage.setItem("entryViewed", "true")
        }
    }, [entryViewed])

    return (
        <EntryContext.Provider value={{ entryViewed, setEntryViewed }}>
            {children}
        </EntryContext.Provider>
    );
}