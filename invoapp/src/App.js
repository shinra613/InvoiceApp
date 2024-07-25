
import './App.css';



var myHeaders = new Headers();



  myHeaders.append("Authorization", "Zoho-oauthtoken 1000.00efac15027e12d58579aefb5e09d181.884d10715301015c02720a1ac6b32061");
  myHeaders.append("X-com-zoho-invoice-organizationid", "678519710");
  myHeaders.append("Cookie", "BuildCookie_678519710=1; 0d082fb755=3c0a0b3aa4880cee0d8fb95ca2214733; JSESSIONID=045091E3FC9963A6277EE6D1ED5E493A; _zcsr_tmp=e2997722-ac35-49f0-86e3-fddbc3d113c9; zbcscook=e2997722-ac35-49f0-86e3-fddbc3d113c9");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://invoice.zoho.com/api/v3/invoices", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));




function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
