import React from "react";

const Maps = () => {
  return (
    <div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24329.350150091946!2d32.79115007910157!3d39.936257309662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f9dbdfdc003%3A0xa3f8a3d0d1e7f193!2sDmr%20Grup%20Yap%C4%B1%20Malzemeleri%20Sanayi%20Ve%20Ticaret%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1698078818170!5m2!1str!2str"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Maps;
