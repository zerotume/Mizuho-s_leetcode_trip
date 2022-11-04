const getTest = async () => {
    let res = await fetch("https://jsonmock.hackerrank.com/api/medical_records?page=10");
    let data = await res.json();
    console.log(data);
}

getTest();
