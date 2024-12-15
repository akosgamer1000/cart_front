import React, { createContext, useState, useContext, ReactNode } from 'react';



interface UserContextType {
    user: Boolean | null;
    login1: (userData: Boolean) => void;
    logout1: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<boolean | null>(null);

    const login1 = () => {
        setUser(true);
    };

    const logout1 = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login1, logout1 }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};