import { useState, useRef, useEffect } from "react";

import accordion from "src/styles/accordionMenu.module.css";

export default function AccordionExam({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (event) => {
    event.stopPropagation(); // メニュー要素でのイベント伝播を停止
    // メニュー要素がクリックされた場合にアコーディオンを閉じる処理を追加
    setIsOpen(false);
  };

  return (
    <div ref={menuRef}>
      <div className={isOpen ? accordion.open : accordion.close}>
        <div className={accordion.accordionHeader} onClick={toggleAccordion}>
          {title}
        </div>
        {isOpen && (
          <div className={accordion.accordionContent} onClick={handleMenuClick}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
