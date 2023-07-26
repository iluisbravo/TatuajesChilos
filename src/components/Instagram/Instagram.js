import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .sectionContent{
        position: relative;
        /* padding: 30px */
    }
`;

const Instagram = () => {

    let img = "./assets/Back.png";
    return (
        <>
            <Styles>
                <div className="height100 bg-orange-opacity" id="Instagram">
                    {/* <img alt="cotizador.img" className="" src={img} /> */}
                    <div className="sectionContent p-4">
                        <h2 className="textTitle text titleOrangeNeon">
                            {/* Encuéntranos */}
                            INSTAGRAM
                        </h2>

                        <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" className="crt-logo crt-tag">Powered by Curator.io</a></div>
                    </div>
                </div>
            </Styles>
        </>
    )
}

export default Instagram;