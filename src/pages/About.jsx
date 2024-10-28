

const About = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-4xl font-bold  text-center">Bizim haqqımızda</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 w-full bg-red-200 p-4">
            <p>Ortak Türk Dövlətləri Təhsil Platforması, Türk xalqları arasında təhsilin inkişafını və əməkdaşlığını gücləndirmək məqsədilə yaradılmış bir təşəbbüsdür. Biz, Türk dili və mədəniyyətinin paylaşılması, bilik mübadiləsi və müasir təhsil metodlarının tətbiqi ilə birlikdə, Türk dövlətləri arasında dostluq və həmrəylik bağlarını möhkəmləndirməyə çalışırıq</p>
          </div>
          <div className="lg:w-1/2 w-full bg-red-300 p-4">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
