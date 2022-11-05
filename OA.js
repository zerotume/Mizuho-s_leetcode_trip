const getTest = async () => {
    let res = await fetch("https://jsonmock.hackerrank.com/api/medical_records?page=10");
    let data = await res.json();
    console.log(data);
}

getTest();

// the fetch in our codes comes from webpack
// todo: find out why how it is imported to the front end place
// get the whole flow
