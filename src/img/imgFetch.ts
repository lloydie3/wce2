import aus from './AUS.webp'
import bel from './BEL.webp'
import bra from './BRA.webp'
import can from './CAN.webp'
import cmr from './CMR.webp'
import crc from './CRC.webp'
import cro from './CRO.webp'
import den from './DEN.webp'
import ecu from './ECU.webp'
import eng from './ENG.webp'
import esp from './ESP.jpg'
import fra from './FRA.webp'
import ger from './GER.webp'
import gha from './GHA.webp'
import irn from './IRN.webp'
import jpn from './JPN.webp'
import kor from './KOR.webp'
import ksa from './KSA.webp'
import mar from './MAR.webp'
import mex from './MEX.webp'
import ned from './NED.webp'
import pol from './POL.webp'
import por from './POR.webp'
import qar from './QAT.webp'
import sen from './SEN.webp'
import srb from './SRB.webp'
import sui from './SUI.webp'
import tun from './TUN.webp'
import uru from './URU.webp'
import usa from './USA.webp'
import wal from './WAL.webp'

export const getImgByName = (countryName: string): any => {
  const imgMap = {
    Australia: aus,
    Belgium: bel,
    Brazil: bra,
    Canada: can,
    Cameroon: cmr,
    'Costa Rica': crc,
    Croatia: cro,
    Denmark: den,
    Ecuador: ecu,
    England: eng,
    // 'Spain': esp,
    France: fra,
    Germany: ger,
    Ghana: gha,
    Iran: irn,
    Japan: jpn,
    'South Korea': kor,
    'Saudi Arabia': ksa,
    Spain: esp,
    Morocco: mar,
    Mexico: mex,
    Netherlands: ned,
    Poland: pol,
    Portugal: por,
    Qatar: qar,
    Senegal: sen,
    Serbia: srb,
    Switzerland: sui,
    Tunisia: tun,
    Uruguay: uru,
    USA: usa,
    Wales: wal
  }
  return imgMap[countryName]
}
