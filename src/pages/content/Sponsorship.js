import React, {Component, Fragment} from 'react'
import icons from "glyphicons";

export default class Sponsorship extends Component {
    render() {
        return (
            <Fragment>
            <div style={{fontSize:17}}>
                <h2>Sponsorship</h2>
                NSC 2019 is a three-day event hosted by Department of Mechanical and Industrial Engineering, IIT
                Roorkee to be held on December 6th – 8th, 2019. The event will include oral and poster
                presentations of research papers grouped into parallel sessions. Keynote talks from experts and
                panel discussions are also included in the program schedule of the conference.
                <br/><br/>
                Sponsors are invited to highlight their products and services to the delegates through this
                Conference. Various opportunities for association are available as per sponsorship details given
                below. You can book the Sponsorship type by making advance payment through State Bank of India
                Portal through the weblink provided below<br/><br/>
                <a style={{
                    border: '1px solid skyblue',
                    padding: '10px',
                    margin: 0,
                    backgroundColor: 'darkgreen',
                    color: 'white'
                }}
                   href="https://www.onlinesbi.com/prelogin/icollecthome.htm?corpID=365641" target="sponsorship">Click
                    Here</a><br/><br/>

                <br/>
                <table align="center">
                    <tr align="center" style={{border: '2px inset silver',color: 'navy'}}>
                        <th style={{paddingLeft:5}}>Sponsorship Type</th>
                        <th style={{padding:10}}>Company Logo on the conference Website</th>
                        <th>Colour advertisement of the sponsor/product in conference souvenir</th>
                        <th>Exhibit space</th>
                        <th>Complimentary Registration</th>
                    </tr>
                    <tr style={{border: '2px inset silver'}}>
                        <th style={{paddingLeft:5}}>PLATINUM<br/>(2 Lacs)</th>
                        <th style={{color: 'green',paddingLeft:30}}>{icons.check}</th>
                        <th style={{color: 'green'}}>{icons.check}</th>
                        <th>02</th>
                        <th>04</th>
                    </tr>
                    <tr style={{border: '2px inset silver'}}>
                        <th style={{paddingLeft:5}}>DIAMOND<br/>(1 Lacs)</th>

                        <th style={{color: 'green',paddingLeft:30}}>{icons.check}</th>
                        <th style={{color: 'green'}}>{icons.check}</th>
                        <th>01</th>
                        <th>02</th>
                    </tr>
                    <tr style={{border: '2px inset silver'}}>
                        <th style={{paddingLeft:5}}>GOLD<br/>(0.75 Lacs)</th>
                        <th style={{color: 'red',paddingLeft:30}}>{icons.cross}</th>
                        <th style={{color: 'green'}}>{icons.check}</th>
                        <th>01</th>
                        <th>01</th>
                    </tr>
                    <tr style={{border: '2px inset silver'}}>
                        <th style={{paddingLeft:5}}>SILVER<br/>(0.5 Lacs)</th>
                        <th style={{color: 'red',paddingLeft:30}}>{icons.cross}</th>
                        <th style={{color: 'green'}}>{icons.check}</th>
                        <th style={{color: 'red'}}>{icons.cross}</th>
                        <th>01</th>
                    </tr>
                </table>
            </div>
            </Fragment>
        );
    }
}