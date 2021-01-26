import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function App() {

  const [myData, setMyData] = useState("")

  useEffect(() => {

    try {

      const myFunc = async () => {
        let data = await axios.get('https://ip.nf/me.json');

        let myNewData = data.data.ip;

        setMyData(myNewData)

        console.log(myNewData)
      }

      myFunc();

    } catch (error) {
      setMyData(error)
    }

  }, [setMyData])

  return (
    <div>

      {myData ? <>

        <div className="container text-center" style={{ marginTop: "10em" }}>
          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-8 col-xs-10 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title" key={myData.ip}>{myData.ip}</h2>
                  <p className="card-text">{myData.asn}</p>
                  <p className="card-text">{myData.netmask}</p>
                  <p className="card-text">{myData.hostname}</p>
                  <p className="card-text">{myData.city}</p>
                  <p className="card-text">{myData.post_code}</p>
                  <p className="card-text">{myData.country}</p>
                  <p className="card-text">{myData.country_code}</p>
                  <p className="card-text">{myData.latitude}</p>
                  <p className="card-text">{myData.longitude}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </> : <>


          <div className="container text-center" style={{ marginTop: "10em" }}>
            <div className="row justify-content-center">
              <div className="col-md-7 col-sm-8 col-xs-10 col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title" >

                      Loading .......

                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>}

    </div>
  )
}
