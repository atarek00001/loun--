import React, { useState } from 'react';

export default function LounFittingRoom() {
  // بيانات المودل الثابتة (لونا)
  const modelInfo = {
    name: "Luna",
    title: "YOUR VIRTUAL MODEL",
    stats: [
      { label: "HEIGHT", value: "170 cm", icon: "📏" },
      { label: "BUST", value: "83 cm", icon: "📐" },
      { label: "WEIGHT", value: "65 kg", icon: "⚖️" },
      { label: "HIPS", value: "90 cm", icon: "👗" },
      { label: "SHOE SIZE", value: "38", icon: "👠" },
    ],
    features: [
      { label: "HAIR / تمشيطة", value: "Dark Brown" },
      { label: "EYES / العيون", value: "Brown" },
      { label: "SKIN / البشرة", value: "Deep Black" }
    ]
  };

  // الوضعيات المتاحة (Poses)
  const poses = [
    { id: 'standing_01', name: 'Standing 01', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=300&fit=crop' },
    { id: 'standing_02', name: 'Standing 02', img: 'https://images.unsplash.com/photo-1539008588-bbf93b57fbcc?w=200&h=300&fit=crop' },
    { id: 'side_view', name: 'Side View', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=300&fit=crop' },
    { id: 'looking_down', name: 'Looking Down', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=300&fit=crop' },
    { id: 'sitting', name: 'Sitting', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=300&fit=crop' },
    { id: 'back_view', name: 'Back View', img: 'https://images.unsplash.com/photo-1539008588-bbf93b57fbcc?w=200&h=300&fit=crop' },
    { id: 'walking', name: 'Walking', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=300&fit=crop' },
  ];

  // مكتبة الملابس المتاحة (Default Clothing Library)
  const defaultClothing = [
    { id: 'ribbed_tank', name: 'Ribbed Tank', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop', color: '#E8DCC4' },
    { id: 'basic_tshirt', name: 'Basic T-Shirt', img: 'https://images.unsplash.com/photo-1503342394128-c104cbb9810d?w=150&h=150&fit=crop', color: '#FFFFFF' },
    { id: 'oversized_shirt', name: 'Oversized Shirt', img: 'https://images.unsplash.com/photo-1545882546-0481486d50b1?w=150&h=150&fit=crop', color: '#F5F4F0' },
    { id: 'chiffon_blouse', name: 'Chiffon Blouse', img: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=150&h=150&fit=crop', color: '#F0E6D2' },
    { id: 'square_neck', name: 'Square Neck Top', img: 'https://images.unsplash.com/photo-1506629082632-11c7e44724a0?w=150&h=150&fit=crop', color: '#E8DCC4' },
    { id: 'sleeveless_top', name: 'Sleeveless Top', img: 'https://images.unsplash.com/photo-1554224311-beee415c15a7?w=150&h=150&fit=crop', color: '#FFFFFF' },
    { id: 'linen_shirt', name: 'Linen Shirt', img: 'https://images.unsplash.com/photo-1570635148912-20a20874aff1?w=150&h=150&fit=crop', color: '#F5F4F0' },
    { id: 'one_shoulder', name: 'One Shoulder Top', img: 'https://images.unsplash.com/photo-1485526046281-8f769b0e5b57?w=150&h=150&fit=crop', color: '#E8DCC4' },
    { id: 'tie_blouse', name: 'Tie Blouse', img: 'https://images.unsplash.com/photo-1551971081-7de8a65c3341?w=150&h=150&fit=crop', color: '#F0E6D2' },
    { id: 'v_neck', name: 'V-Neck Tee', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6a186?w=150&h=150&fit=crop', color: '#FFFFFF' },
  ];

  // الإعلانات المولدة مسبقاً (My Outfits)
  const myOutfits = [
    { id: 1, name: 'Outfit 01', desc: 'Ribbed Tank', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop' },
    { id: 2, name: 'Outfit 02', desc: 'Basic T-Shirt', img: 'https://images.unsplash.com/photo-1539008588-bbf93b57fbcc?w=200&h=250&fit=crop' },
    { id: 3, name: 'Outfit 03', desc: 'Oversized Shirt', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=250&fit=crop' },
    { id: 4, name: 'Outfit 04', desc: 'Chiffon Blouse', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=250&fit=crop' },
    { id: 5, name: 'Outfit 05', desc: 'Square Neck Top', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&h=250&fit=crop' },
  ];

  // الحالات التفاعلية (States)
  const [selectedPose, setSelectedPose] = useState('standing_01');
  const [selectedGarment, setSelectedGarment] = useState('ribbed_tank');
  const [clothingLibrary, setClothingLibrary] = useState(defaultClothing);
  const [uploadedProduct, setUploadedProduct] = useState(null);
  const [uploadedProductName, setUploadedProductName] = useState('');
  const [format, setFormat] = useState('1:1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutfits, setGeneratedOutfits] = useState(myOutfits);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);

  // دالة رفع صورة ملابس جديدة
  const handleProductUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // التحقق من نوع الملف
      if (!file.type.startsWith('image/')) {
        alert('يرجى اختيار صورة صحيحة');
        return;
      }

      // التحقق من حجم الملف (أقصى 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('حجم الملف كبير جداً (أقصى 10MB)');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setUploadedProduct(imageUrl);
        setUploadedProductName(file.name);
        setShowUploadSuccess(true);

        // إضافة الملابس المرفوعة إلى المكتبة
        const newClothing = {
          id: `custom_${Date.now()}`,
          name: file.name.split('.')[0] || 'Custom Upload',
          img: imageUrl,
          color: '#E8DCC4',
        };

        setClothingLibrary([newClothing, ...clothingLibrary]);
        setSelectedGarment(newClothing.id);

        // إخفاء رسالة النجاح بعد 3 ثواني
        setTimeout(() => setShowUploadSuccess(false), 3000);
      };

      reader.readAsDataURL(file);
    }
  };

  // دالة توليد الإعلان (محاكاة)
  const handleGenerateAd = async () => {
    if (!uploadedProduct && selectedGarment === 'ribbed_tank') {
      alert('يرجى رفع صورة ملابس أولاً أو اختيار منتج من المكتبة');
      return;
    }

    setIsGenerating(true);

    // محاكاة طلب API للذكاء الاصطناعي
    setTimeout(() => {
      setIsGenerating(false);

      const selectedGarmentName = clothingLibrary.find(g => g.id === selectedGarment)?.name || selectedGarment;
      
      // إنشاء outfit جديد
      const newOutfit = {
        id: Date.now(),
        name: `Generated ${new Date().toLocaleTimeString('ar-EG')}`,
        desc: selectedGarmentName,
        img: uploadedProduct || poses.find(p => p.id === selectedPose)?.img,
      };

      setGeneratedOutfits([newOutfit, ...generatedOutfits]);

      alert(`✅ تم دمج الملابس بنجاح!
      
المودل: Luna (لونا)
الملابس: ${selectedGarmentName}
الزاوية: ${selectedPose.replace(/_/g, ' ').toUpperCase()}
الصيغة: ${format}
      
تم حفظ الإعلان في "My Outfits"`);
    }, 2500);
  };

  // دالة تحميل الصورة المولدة
  const handleDownloadOutfit = (outfit) => {
    const link = document.createElement('a');
    link.href = outfit.img;
    link.download = `loun-outfit-${outfit.id}.png`;
    link.click();
  };

  // دالة حذف outfit من السجل
  const handleDeleteOutfit = (outfitId) => {
    setGeneratedOutfits(generatedOutfits.filter(o => o.id !== outfitId));
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#333] p-4 font-sans antialiased selection:bg-amber-100">
      
      {/* البار الرئيسي */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 items-center bg-[#FAF9F5] border border-stone-200/60 px-8 py-3 rounded-2xl mb-6 shadow-sm">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-[0.2em] text-stone-900">LOUN</span>
          <span className="text-[10px] tracking-[0.25em] text-stone-400 font-bold -mt-1">FITTING ROOM</span>
        </div>
        <div className="text-center">
          <h1 className="text-sm font-semibold tracking-wide text-stone-800 uppercase">Loun Fitting Room</h1>
          <p className="text-xs text-stone-400 mt-0.5">Meet Luna – the face of LOUN.</p>
        </div>
        <div className="flex justify-end gap-3 text-stone-600">
          <button className="p-2 hover:bg-stone-200/50 rounded-full transition">☀️</button>
          <button className="p-2 hover:bg-stone-200/50 rounded-full transition">☰</button>
        </div>
      </div>

      {/* منطقة العمل الرئيسية */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* العمود الأيسر: معلومات المودل لونا */}
        <div className="lg:col-span-3 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="text-center py-4 mb-4">
              <h2 className="text-5xl font-serif tracking-tight text-stone-900 font-normal">Luna</h2>
              <p className="text-[10px] tracking-[0.15em] text-stone-400 font-bold mt-1">YOUR VIRTUAL MODEL</p>
            </div>

            <div className="border-t border-stone-200/80 pt-5 mb-6">
              <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-4 uppercase">Model Info</p>
              <div className="space-y-4">
                {modelInfo.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-stone-100 pb-2 text-sm">
                    <span className="text-stone-400 flex items-center gap-2">
                      <span>{stat.icon}</span> {stat.label}
                    </span>
                    <span className="font-semibold text-stone-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200/80 pt-5 space-y-3">
              {modelInfo.features.map((feat, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="text-stone-400 font-bold tracking-wider">{feat.label}</span>
                  <span className="font-bold text-stone-900 bg-stone-200/40 px-2 py-0.5 rounded-md">{feat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-8 py-3 bg-white border border-stone-200 hover:bg-stone-50 active:scale-[0.98] rounded-xl text-xs font-bold tracking-wider text-stone-600 shadow-sm transition">
            EDIT MODEL
          </button>
        </div>

        {/* العمود الأوسط: شاشة عرض المودل بالملابس المدمجة */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-4 flex flex-col justify-between shadow-sm relative min-h-[620px]">
          <div className="relative w-full h-[560px] bg-stone-200/40 rounded-2xl overflow-hidden flex items-center justify-center border border-stone-100 group">
            {/* الصورة الأساسية للمودل */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=900&fit=crop" 
              alt="LOUN Virtual Model Display - Luna" 
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
            
            {/* طبقة شفافة للملابس المرفوعة إذا كانت موجودة */}
            {uploadedProduct && (
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={uploadedProduct} 
                  alt="Uploaded Product" 
                  className="h-[60%] object-contain drop-shadow-lg"
                  style={{ opacity: 0.85 }}
                />
              </div>
            )}

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-[10px] font-bold text-stone-700 tracking-wider shadow-sm">
              HEIGHT: 170 CM
            </div>
          </div>
          <div className="mt-3 text-center text-[11px] font-medium text-stone-500 bg-stone-100/80 py-1.5 rounded-xl border border-stone-200/40">
            الوضعية المحددة: <span className="font-black text-stone-900 uppercase tracking-wider">{selectedPose.replace(/_/g, ' ')}</span>
          </div>
        </div>

        {/* العمود الأيمن: اختيار الوضعيات */}
        <div className="lg:col-span-3 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-5 flex flex-col shadow-sm">
          <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-4 text-center uppercase">Poses</p>
          <div className="grid grid-cols-2 gap-3 overflow-y-auto max-h-[550px] pr-1 custom-scrollbar">
            {poses.map((pose) => (
              <button
                key={pose.id}
                onClick={() => setSelectedPose(pose.id)}
                className={`flex flex-col items-center p-2 rounded-xl border transition-all duration-200 group active:scale-95 ${
                  selectedPose === pose.id ? 'border-stone-900 bg-stone-100/80 ring-1 ring-stone-900' : 'border-stone-200/60 hover:bg-stone-50'
                }`}
              >
                <div className="w-full h-24 bg-stone-200/60 rounded-lg mb-1.5 overflow-hidden">
                  <img src={pose.img} alt={pose.name} className="w-full h-full object-cover transition group-hover:scale-105" />
                </div>
                <span className="text-[10px] font-medium text-stone-600">{pose.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* لوحة التحكم السفلية */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
        
        {/* 1. مساحة رفع الملابس من البراند الخاص بك */}
        <div className="lg:col-span-3 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-5 shadow-sm flex flex-col justify-center">
          <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-3 uppercase">Upload Clothing</p>
          <div className="border-2 border-dashed border-stone-300 hover:border-stone-500 rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition relative group bg-white/50">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleProductUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-10" 
            />
            <span className="text-3xl mb-2 transition group-hover:animate-bounce">👕</span>
            <p className="text-xs font-bold text-stone-700">Click or drag image here</p>
            <p className="text-[10px] text-stone-400 mt-0.5">PNG, JPG up to 10MB</p>
            
            {showUploadSuccess && (
              <p className="text-[10px] text-emerald-600 mt-2 font-black bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                ✓ تم تجهيز منتجك الجديد
              </p>
            )}

            {uploadedProductName && !showUploadSuccess && (
              <p className="text-[9px] text-blue-600 mt-2 font-semibold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 truncate w-full">
                📷 {uploadedProductName}
              </p>
            )}
          </div>
        </div>

        {/* 2. مكتبة الملابس المتوفرة */}
        <div className="lg:col-span-6 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-5 shadow-sm">
          <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-3 uppercase">Clothing Library</p>
          <div className="grid grid-cols-5 gap-3 overflow-x-auto pb-2">
            {clothingLibrary.map((garm) => (
              <button
                key={garm.id}
                onClick={() => setSelectedGarment(garm.id)}
                className={`p-2 rounded-xl border text-center transition-all bg-white flex flex-col items-center hover:scale-105 ${
                  selectedGarment === garm.id ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900 scale-105' : 'border-stone-200/60'
                }`}
                title={garm.name}
              >
                <img src={garm.img} alt={garm.name} className="w-full h-14 object-contain mb-1" />
                <p className="text-[9px] text-stone-600 font-bold truncate w-full">{garm.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* 3. اختيار صيغة الإعلان وتوليد الصورة */}
        <div className="lg:col-span-3 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-5 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-3 uppercase">Choose Format</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {['1:1', '4:5', '9:16'].map((formSize) => (
                <button
                  key={formSize}
                  onClick={() => setFormat(formSize)}
                  className={`py-1.5 text-xs rounded-lg border font-black tracking-wider transition ${
                    format === formSize ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {formSize}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerateAd}
            disabled={isGenerating}
            className="w-full bg-[#2E251E] hover:bg-stone-800 text-white py-3.5 rounded-xl font-bold text-xs tracking-widest shadow-md transition-all active:scale-[0.98] disabled:bg-stone-400"
          >
            {isGenerating ? "⏳ GENERATING IMAGE..." : "📸 GENERATE IMAGE"}
          </button>
        </div>

      </div>

      {/* أرشيف الإعلانات السابقة (My Outfits) */}
      {generatedOutfits.length > 0 && (
        <div className="max-w-[1400px] mx-auto mt-6 bg-[#FAF9F5] border border-stone-200/60 rounded-3xl p-5 shadow-sm">
          <p className="text-[10px] font-extrabold tracking-widest text-stone-400 mb-3 uppercase">My Outfits ({generatedOutfits.length})</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {generatedOutfits.map((outfit) => (
              <div key={outfit.id} className="bg-white border border-stone-200/60 rounded-xl p-2 flex flex-col items-center group">
                <div className="w-full h-36 bg-stone-100 rounded-lg overflow-hidden mb-2 relative">
                  <img src={outfit.img} alt={outfit.name} className="w-full h-full object-cover transition group-hover:scale-110" />
                  
                  {/* أزرار العمل على الصورة */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleDownloadOutfit(outfit)}
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition text-stone-900 text-lg"
                      title="Download"
                    >
                      ⬇️
                    </button>
                    <button
                      onClick={() => handleDeleteOutfit(outfit.id)}
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition text-stone-900 text-lg"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <p className="text-[10px] font-black text-stone-800 truncate w-full text-center">{outfit.name}</p>
                <p className="text-[9px] text-stone-400 font-medium truncate w-full text-center">{outfit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}