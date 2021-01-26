import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Map from "./Map";

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

        <div className="container text-center" style={{ marginTop: "5em" }}>
          <h1 className="text-center text-white pb-4">Know Your IP !</h1>

          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-8 col-xs-10 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title" key={myData.ip}>
                    <span className="mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>
                    </span>
                    <span style={{ color: "" }}>
                      IP :
                      </span>
                    <span>{myData.ip}</span>
                  </h2>
                  <p className="card-text">
                    <span className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 13l6 9H6l6-9zm0 3.6L9.74 20h4.52L12 16.6zm-1.06-6.04a1.5 1.5 0 1 1 2.12-2.12 1.5 1.5 0 0 1-2.12 2.12zM5.281 2.783l1.415 1.415a7.5 7.5 0 0 0 0 10.606l-1.415 1.415a9.5 9.5 0 0 1 0-13.436zm13.436 0a9.5 9.5 0 0 1 0 13.436l-1.415-1.415a7.5 7.5 0 0 0 0-10.606l1.415-1.415zM8.11 5.611l1.414 1.414a3.5 3.5 0 0 0 0 4.95l-1.414 1.414a5.5 5.5 0 0 1 0-7.778zm7.778 0a5.5 5.5 0 0 1 0 7.778l-1.414-1.414a3.5 3.5 0 0 0 0-4.95l1.414-1.414z" /></svg></span>
                    <span style={{ color: "" }}>
                      ASN :
                      </span>
                    {myData.asn}</p>
                  <p className="card-text">
                    <span className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z" /></svg></span>
                    <span style={{ color: "" }}>
                      NET MASK :
                      </span>
                    {myData.netmask}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      HOSTNAME :
                      </span>
                    {myData.hostname}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      CITY :
                      </span>
                    {myData.city}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      POST CODE :
                      </span>
                    {myData.post_code}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      COUNTRY :
                      </span>
                    {myData.country}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      COUNTRY CODE :
                      </span>
                    {myData.country_code}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      LATITUDE :
                      </span>
                    {myData.latitude}</p>
                  <p className="card-text">
                    <span style={{ color: "" }}>
                      LONGITUTE :
                      </span>
                    {myData.longitude}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Map latitude={myData.latitude} longitude={myData.longitude} />

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
