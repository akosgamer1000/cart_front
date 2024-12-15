import React, { createContext, useState, useContext, ReactNode } from 'react';


export interface Fel {
    name: string;
    password: string;
}


interface UserDataContextType {
    user: Fel | null; 
    setData: (userdata: Fel) => void; 
}


const UserDataContext = createContext<UserDataContextType | undefined>(undefined);


export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Fel | null>(null); 

    const setData = (userdata: Fel) => {
        setUser(userdata); 
    };

    return (
        <UserDataContext.Provider value={{ user, setData }}>
            {children}
        </UserDataContext.Provider>
    );
};


export const useUserData = (): UserDataContextType => {
    const context = useContext(UserDataContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
