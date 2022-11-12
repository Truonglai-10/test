import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage_filter">
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr/>

        <ChannelRow 
            image="https://yt3.ggpht.com/dgZwDRAhI3JFzmKIQFr5OPemgZ2swu5QOyn1N58eSs4bLREQ1SMQ6AIwGLwajKwAClOSZKibwg=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="FAPTV"
            verified 
            subs="13,5 Tr"
            noOfVideos={607}
            description="FAPTV được thành lập vào ngày 14/02/2014 bởi các thành viên: Đạo diễn Trần Đức Viễn, Rapper Thái Vũ (Black Bi), AT117 (Tài ..."
        />
        <hr/>
        <VideoRow 
            views="218.741 lượt xem"
            timestamp="11 thg 11, 2022"
            title="FAPtv || Lớp Chuyên Cá Biệt: Tập 7"
            subs="13,5 Tr"
            description="FAPtv || Lớp Chuyên Cá Biệt: Tập 7 Thể loại phim: học đường, tình cảm, hài hước #FAPTV #Cơmnguội #leadwithLOF ..."
            channel="FAPTV"
            image="https://i.ytimg.com/an_webp/ZFT3sBossu0/mqdefault_6s.webp?du=3000&sqp=CK7Mu5sG&rs=AOn4CLDCHVYfOsXODQ77NIqHrjgs6fWLSA"
        />
    </div>
  )
}

export default SearchPage