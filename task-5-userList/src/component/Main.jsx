import users from './users'
  
  function UserAdminInfo() {
    const calculateAdminAgeAverage = () => {
        const admins = users.filter(user => user.role === "admin");
        const adminAges = admins.map(admin => admin.age);
        const averageAge = adminAges.reduce((sum, age) => sum + age, 0) / admins.length;
        return averageAge.toFixed(2); //  نمایش دو رقم اعشار
    };

    const userList = users.filter(user => user.role === "user");

    return (
        <div>
            <div>
                <h3>میانگین سنی کاربران نقش admin</h3>
                <p> {calculateAdminAgeAverage()} سال</p>
            </div>

            <div>
                <h3>لیست کاربران نقش user</h3>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>
                            {user.name} - سن: {user.age}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default UserAdminInfo;