import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';


export interface Fel {
    id:number;
    name: string;
    password: string;
}


interface UserDataContextType {
    ids:number;
    user: Fel | null; 
    setData: (userdata: Fel) => void; 
    updateUsername:(name:string,id:number)=>void
    updatePassord:(password:string,id:number)=>void
    idgetter:(name:string)=> void
}


const UserDataContext = createContext<UserDataContextType | undefined>(undefined);


export const UserDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<Fel | null>(null); 
    const[ids,setIds]=useState<number>(1)

    const setData = (userdata: Fel) => {
        setUser(userdata); 
    };
    const updateUsername = async (name: string, id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/updateUsername/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating username:', errorData.error);
                return;
            }

            const data = await response.json();
            setUser(user ? { ...user, name: name } : null);
            console.log('Username updated successfully:', data.message);
        } catch (error) {
            console.error('Network error updating username:', error);
        }
    };
    const idgetter = async (name: string) => {
        try {
            const response = await fetch(`http://localhost:3000/idgetter/${name}`);
            
            if (!response.ok) {
                console.error(`Error fetching ID`);
                return;
            }
        
            const data = await response.json();
            console.log("Setting ID to:", data.id);
            setIds(data.id);
        } catch (error) {
            console.error("Error in idgetter:", error);
            return null;
        }
    };
    useEffect(() => {
        console.log('IDs state updated:', ids);
    }, [ids]);
    const updatePassord = async (password: string, id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/updatePassword/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error updating password:', errorData.error);
                return;
            }

            const data = await response.json();
            setUser(user ? { ...user, password: password } : null);
            console.log('Password updated successfully:', data.message);
        } catch (error) {
            console.error('Network error updating password:', error);
        }
    };
    
    return (
        <UserDataContext.Provider value={{ ids,user, setData,updateUsername, updatePassord ,idgetter}}>
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
