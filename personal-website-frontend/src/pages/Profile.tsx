import { useEffect, useState } from "react";
import { updateUser } from "../services/UpdateProfile";
import "../styles/Profile.css";

interface LoggedInUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

interface ProfileProps {
    user: LoggedInUser | null;
}

function Profile({ user }: ProfileProps) {
    const [profile, setProfile] = useState<LoggedInUser | null>(null);

    const [editingName, setEditingName] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingPhone, setEditingPhone] = useState(false);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState("");

    useEffect(() => {
        async function getProfile() {
            if (!user) {
                return;
            }

            try {
                const response = await fetch(
                    `http://localhost:8080/personalwebsite/users/${user.id}`,
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Unable to load profile.");
                }

                const data: LoggedInUser = await response.json();

                setProfile(data);

                setFirstname(data.firstname);
                setLastname(data.lastname);
                setEmail(data.email);
                setPhone(data.phone);

            } catch (error) {
                console.error(error);
            }
        }

        getProfile();

    }, [user]);


    async function saveProfile() {
        if (!profile) {
            return;
        }

        try {
            const updatedUser = await updateUser(
                profile.id,
                {
                    firstname,
                    lastname,
                    email,
                    phone,
                }
            );

            setProfile(updatedUser);

            setEditingName(false);
            setEditingEmail(false);
            setEditingPhone(false);

            setMessage("Profile updated.");

        } catch (error) {
            console.error(error);

            setMessage("Unable to update profile.");
        }
    }


    if (!user) {
        return (
            <main className="profile-page">

                <section className="profile-box">

                    <h1>Profile</h1>

                    <p>
                        Please log in to view your profile.
                    </p>

                </section>

            </main>
        );
    }


    if (!profile) {
        return (
            <main className="profile-page">

                <section className="profile-box">

                    <h1>Profile</h1>

                    <p>Loading profile...</p>

                </section>

            </main>
        );
    }


    return (
        <main className="profile-page">

            <section className="profile-box">

                <h1>My Profile</h1>


                <div className="profile-info">


                    {/* NAME */}

                    <div className="profile-row">

                        <div>
                            <h3>Name</h3>

                            {!editingName ? (
                                <p>
                                    {profile.firstname} {profile.lastname}
                                </p>
                            ) : (
                                <div className="profile-name-inputs">

                                    <input
                                        type="text"
                                        value={firstname}
                                        onChange={(event) =>
                                            setFirstname(event.target.value)
                                        }
                                    />

                                    <input
                                        type="text"
                                        value={lastname}
                                        onChange={(event) =>
                                            setLastname(event.target.value)
                                        }
                                    />

                                </div>
                            )}
                        </div>


                        {!editingName ? (
                            <button
                                type="button"
                                onClick={() => setEditingName(true)}
                            >
                                Change
                            </button>
                        ) : (
                            <div className="profile-buttons">

                                <button
                                    type="button"
                                    onClick={saveProfile}
                                >
                                    Enter
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setFirstname(profile.firstname);
                                        setLastname(profile.lastname);
                                        setEditingName(false);
                                    }}
                                >
                                    Cancel
                                </button>

                            </div>
                        )}

                    </div>


                    {/* EMAIL */}

                    <div className="profile-row">

                        <div>
                            <h3>Email</h3>

                            {!editingEmail ? (
                                <p>{profile.email}</p>
                            ) : (
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            )}
                        </div>


                        {!editingEmail ? (
                            <button
                                type="button"
                                onClick={() => setEditingEmail(true)}
                            >
                                Change
                            </button>
                        ) : (
                            <div className="profile-buttons">

                                <button
                                    type="button"
                                    onClick={saveProfile}
                                >
                                    Enter
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setEmail(profile.email);
                                        setEditingEmail(false);
                                    }}
                                >
                                    Cancel
                                </button>

                            </div>
                        )}

                    </div>


                    {/* PHONE */}

                    <div className="profile-row">

                        <div>
                            <h3>Phone</h3>

                            {!editingPhone ? (
                                <p>{profile.phone}</p>
                            ) : (
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                />
                            )}
                        </div>


                        {!editingPhone ? (
                            <button
                                type="button"
                                onClick={() => setEditingPhone(true)}
                            >
                                Change
                            </button>
                        ) : (
                            <div className="profile-buttons">

                                <button
                                    type="button"
                                    onClick={saveProfile}
                                >
                                    Enter
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setPhone(profile.phone);
                                        setEditingPhone(false);
                                    }}
                                >
                                    Cancel
                                </button>

                            </div>
                        )}

                    </div>

                </div>


                {message && (
                    <p className="profile-message">
                        {message}
                    </p>
                )}

            </section>

        </main>
    );
}

export default Profile;