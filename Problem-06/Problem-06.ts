// Problem-06



interface Profile {
    name: string;
    age: number;
    email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
    return { ...profile, ...updates };
}


const myProfile = { name: "Rouf", age: 29, email: "rouf@gmail.com" };
console.log(updateProfile(myProfile, { age: 32 }));
