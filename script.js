function loginUser() {
    const role = document.getElementById('role').value;
    if (role === "admin") {
        window.location.href = "admin.html";
    } else if (role === "owner") {
        window.location.href = "owner.html";
    } else if (role === "seeker") {
        window.location.href = "seeker.html";
    } else {
        alert("Please select a valid role.");
    }
    return false;
}
