import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import './swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { olimpiada } from "../../data/olimpiada";
import { useEffect } from "react";
import Aos, { refresh } from "aos";



const Olimpiada = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      offset:100,
      once: false
    })
    window.addEventListener('load',Aos.refresh)
  },[]);
  
  
  return (
    <div>
      <div className="pb-20">

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {olimpiada.map((layihe) => (
            <SwiperSlide key={layihe.id}>
              <img src={layihe.img} alt="" />
            </SwiperSlide>
          ))}


        </Swiper>

        <div className="container my-10">
          <div className="flex justify-center flex-col lg:flex-row gap-16" >
            <div className="lg:w-1/2 w-full">
              <p className="font-bold text-lg " data-aos="fade-right">Mayın 30-da “Heydər Əliyev İli”nə həsr olunmuş Ortaq Türk Dünyası Olimpiadası qaliblərinin mükafatlandırılma mərasimi keçirilib.



                Əvvəlcə tədbir iştirakçıları Fəxri xiyabana gələrək ümummilli lider Heydər Əliyevin məzarını ziyarət edib, abidəsi önünə gül dəstələri qoyaraq xatirəsini ehtiramla yad ediblər. Qonaqlar Şəhidlər xiyabanı və Türk şəhidliyini də ziyarət ediblər.



                Mərasimdə elm və təhsil nazirinin müavini Firudin Qurbanov, Bakı Şəhəri üzrə Təhsil İdarəsinin müdiri Mehriban Vəliyeva, Azərbaycan Milli Elmlər Akademiyasının (AMEA) prezidenti İsa Həbibbəyli, millət vəkilləri, Türkiyə, Qazaxıstan, Özbəkistan, Qırğızıstan respublikalarının ölkəmizdəki səfirləri, ümumi təhsil müəssisələrinin direktorları, şagirdlər, müəllimlər və digər qonaqlar iştirak ediblər.</p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-around">
              <img src="/src/assets/eller_sekil.jfif" alt="" style={{ width: "60%", borderRadius: "10px" }} data-aos="fade-left"/>
            </div>
          </div>
          <div className="bg-blue-500 w-full h-1 mt-8"></div>
        </div>

      </div>
      <div className="container">
        <div className="flex justify-center flex-col lg:flex-row gap-16 mb-20 mt-0" data-aos="fade-up">
          <div className="lg:w-1/2 w-full">
            <img src="/src/assets/turan_bayraq.jfif" alt="" />
          </div>
          <div className="lg:w-1/2 w-full">
            <p className="font-bold text-lg">“Çırpınırdın, Qara dəniz”  kompozisiyası ilə başlayan tədbirdə Ortaq Türk Dünyası Olimpiadası barədə hazırlanmış videoçarx nümayiş olunub.



              Tədbirdə çıxış edən elm və təhsil nazirinin müavini Firudin Qurbanov olimpiadaya qoşulan bütün qardaş türk ölkələrinin  komandalarını təbrik edib.



              Nazir müavini sözügedən olimpiadanın əhəmiyyətindən bəhs edib. Bildirib ki, türk dünyasının bütövlüyü hər bir türk dövlətinin müstəqilliyinin qorunmasının və möhkəmləndirilməsinin, milli mədəniyyətinin inkişaf etdirilməsinin başlıca şərtidir. Bu birliyin daha da gücləndirilməsi baxımından  olimpiada bir körpü rolunu oynayır.



              Elm və təhsil nazirinin müavini Vətən Müharibəsi zamanı, eləcə də ondan sonrakı dövrdə türk ölkələrinin Azərbaycan xalqına yüksək dəstəyindən söz açıb. Firudin Qurbanov həmçinin ölkəmizdə ortaq türk ədəbiyyatı və türk əlifbası dərsliyinin hazırlanacağını nəzərə çatdırıb.</p>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Olimpiada