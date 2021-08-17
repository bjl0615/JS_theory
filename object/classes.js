/*
    classes
        ÀÚ¹Ù½ºÅ©¸³Æ®´Â °¡Àå ºü¸£°Ô ¹ßÀüÇÏ´Â ¾ğ¾î Áß¿¡ ÇÏ³ªÀÌ´Ù.
        ÀüÅëÀûÀÎ °´Ã¼ ÁöÇâÀÇ ¹®¹ıÀ» Ã¤ÅÃÇÏ¹Ç·Î½á ÀÌ¹Ì °´Ã¼ ÁöÇâ¿ï »ç¿ëÇÒ ¼ö ÀÖ´Â 
        »ç¶÷µéÀÌ ¹®¹ıÀûÀÎ °ÅºÎ°¨ ¾øÀÌ ÀÚ¹Ù½ºÅ©¸³Æ®¿¡ ¾ÈÂøÇÒ ¼ö ÀÖµµ·Ï ÇÑ´Ù.

        ±¸ Áß¿¡ ÇÏ³ª°¡ class ÀÌ´Ù.
        ´Ù¸¥ ¸¹Àº ¾ğ¾îµéÀº °´Ã¼¸¦ ¸¸µå´Â °øÀåÀ¸·Î½á class¸¦ Áö¿øÇÏ°í ÀÖ´Ù.
        constructÀÇ ´ëÃ¼Àç¶ó°í ÇÒ ¼ö ÀÖ´Â class¿¡ ´ëÇØ¼­ »ìÆìº¸ÀÚ.
    
    È£È¯¼º°ú Ä¡È¯
        ÀÚ¹Ù½ºÅ©¸³Æ®´Â ECMA script¶ó´Â Ç¥ÁØÀ» µû¸£´Âµ¥
        class´Â EMCA script 6ºÎÅÍ µµÀÔ µÈ ¹®¹ıÀÌ´Ù.
        ÀÌÀü ¹öÀü¿¡¼­´Â µ¿ÀÛÈ÷Áö ¾Ê´Â´Ù´Â ´ÜÁ¡À» °¡Áö°í ÀÖ´Ù.
        ÇÏÁö¸¸ ¿À´Ã³¯ ¸¹Àº À¥ºê¶ó¿ìÀú¿Í Node.js¿Í °°Àº ÇÃ·§ÆûµéÀÌ ECMA script 6ÀÌ»óÀÇ
        ¹öÀüÀ» Áö¿øÇÏ°í ÀÖ±â ¶§¹®¿¡ Å©°Ô ¹®Á¦°¡ µÇÁö´Â ¾Ê´Â´Ù.

        ÀÚ¹Ù½ºÅ©¸³Æ®´Â ¿ø·¡ °´Ã¼ ÁöÇâ ¾ğ¾î¿´°í prototype ±â¹İ ¾ğ¾îÀÌ´Ù.
        ±×¸®°í »õ·Ó°Ô µµÀÔµÈ ¹®¹ıÀº ÀÌ¹Ì Á¸ÀçÇÏ´ø ±â´ÉÀ» º¯ÇüÇÑ ¹®¹ıÀÌ´Ù.
        Áï ±âÁ¸¿¡ Á¸ÀçÇÏ´Â ¹®¹ıÀ¸·Îµµ ¶È°°Àº ±â´ÉÀ» ³¾ ¼ö ÀÖ´Ù.

    class¸¦ ÀÌ¿ëÇÑ °´Ã¼ »ı¼º
        ±âÁ¸¿¡ ¸¸µé¾ú´ø Person »ı¼ºÀÚ ÇÔ¼ö¿Í µ¿ÀÏÇÏ°Ô class¸¦ Á¤ÀÇÇØ º¸ÀÚ.
        »ı¼ºÀÚ ÇÔ¼öÀÇ ¿ªÇÒÀº µÎ°¡Áö¿´´Ù.
            1. °´Ã¼¸¦ ¸¸µç´Ù.
            2, °´Ã¼ÀÇ ÃÊ±â »óÅÂ¸¦ Á¤ÀÇÇÑ´Ù.
        ÀÌ°ÍÀ» class¿¡¼­´Â ¾î¶»°Ô ÇÏ´ÂÁö »ìÆìº¸ÀÚ.
        ¿ì¼± °´Ã¼¸¦ »ı¼ºÇÏÀÚ.
            class Person{

            }
            var kim = new Person();
            console.log('kim',kim);
        ÄÚµå¸¦ ½ÇÇà ½ÃÄÑº¸¸é °´Ã¼°¡ »ı¼ºµÈ °ÍÀ» È®ÀÎÇÒ ¼ö ÀÖ´Ù.
        °´Ã¼ÀÇ ÃÊ±â »óÅÂ´Â ¾î¶»°Ô Á¤ÀÇÇØ¾ßÇÒ±î?

    construct ÇÔ¼ö
        class´Â °´Ã¼ÀÇ ÃÊ±â °ªÀ» ÁöÁ¤ÇÏ±â À§ÇØ¼­ °´Ã¼°¡ »ı¼ºµÉ ¶§ ½ÇÇàµÇ±â·Î ¾à¼ÓµÈ ÇÔ¼ö°¡ ÀÖ´Ù.
        ¹Ù·Î construct ÇÔ¼öÀÌ´Ù.
        ¿ì¸®´Â ÀÌ ÇÔ¼ö¸¦ ÀÌ¿ëÇØ °´Ã¼ÀÇ ÃÊ±â °ªÀ» ¼³Á¤ÇÒ ¼ö ÀÖ´Ù.
        ÀÚ¹Ù½ºÅ©¸³Æ®´Â °´Ã¼¸¦ »ı¼ºÇÒ¶§ ÀÚµ¿À¸·Î construct ÇÔ¼ö¸¦ È£ÃâÇÑ´Ù.
            class Person{
                construct(){ //¾à¼ÓµÈ ÀÌ¸§À¸·Î ¹Ù²Ù¸é ¾ÈµÈ´Ù.
                    console.log('constructor');
                }
            }
            var kim = new Person();
            console.log('kim',kim);
        construct ÇÔ¼ö¿¡ ÀÔ·ÂÀ» ¹Ş¾Æ °´Ã¼ÀÇ ÃÊ±â°ªÀ» ¼³Á¤ÇØº¸ÀÚ
            class Person{
                constructor(name,first,second){ //¾à¼ÓµÈ ÀÌ¸§À¸·Î ¹Ù²Ù¸é ¾ÈµÈ´Ù.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);

    ¸Ş¼Òµå ¸¸µé±â
        1. prototypeÀ» ÀÌ¿ëÇØ Ãß°¡ÇÑ´Ù.
            class Person{
                constructor(name,first,second){ //¾à¼ÓµÈ ÀÌ¸§À¸·Î ¹Ù²Ù¸é ¾ÈµÈ´Ù.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                    console.log('constructor');
                }
            }
            Person.protutype.sum = function(){
                return 'prototype:' + (this.first+this.second+this.third); 
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);
        2. class ³»ºÎ¿¡ Á¤ÀÇÇÏ±â
            class Person(){
                constructor(name,first,second){ //¾à¼ÓµÈ ÀÌ¸§À¸·Î ¹Ù²Ù¸é ¾ÈµÈ´Ù.
                    this.name = name;
                    this.first = first;
                    this.second = second;
                }
                sum(){
                    return 'prototype:' + (this.first+this.second);
                }
            }
            var kim = new Person('kim',10,20);
            console.log('kim',kim);
            console.log("kim.sum()",kim.sum());

            var lee = new Person('lee',10,10);
            console.log('lee',lee);
            console.log("lee.sum()",lee.sum());
        °°Àº class¿¡ ¼ÓÇØ ÀÖ´Â ¸ğµç °´Ã¼µéÀÌ °øÀ¯ÇÏ´Â ¸Ş¼Òµå ÀÓÀ» ¾Ë ¼ö ÀÖ´Ù.
        
        Æ¯Á¤ °´Ã¼ÀÇ ¸Ş¼Òµå¸¸ ¼öÁ¤ÇÏ°í ½Í´Ù¸é ±âÁ¸°ú ¶È°°Àº ¹æ¹ıÀ» »ç¿ëÇÏ¸é µÈ´Ù.
            var kim = new Person('kim',10,20);
            kim.sum = function(){
                return 'this:' + (this.first+this.second);
            }
        ¾î¶² °´Ã¼ÀÇ Æ¯¼ºÀ» È£ÃâÇÏ¸é ÀÚ¹Ù½ºÅ©¸³Æ®´Â ±× °´Ã¼°¡ ÇØ´ç Æ¯¼ºÀ» °¡Áö°í ÀÖ´ÀÁö È®ÀÎÇÏ°í
        ÀÖ´Ù¸é ±× Æ¯¼ºÀ» È£ÃâÇÑ´Ù. ¸¸¾à ¾ø´Ù¸é ±× °´Ã¼°¡ ¼ÓÇØ ÀÖ´Â class¿¡¼­ ÇØ´ç Æ¯¼ºÀ» °¡Á®¿Í 
        È£­ŒÇÑ´Ù.
        
*/
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return 'prototype : ' + (this.first+this.second);
    }
}

// Person.prototype.sum = function(){
//     return 'prototype:' + (this.first+this.second);
// }

var kim = new Person('kim', 10,20);
kim.sum = function(){
    return 'this : ' + (this.first+this.second);
}
var lee = new Person('lee', 10, 10);
console.log("kim.sum()",kim.sum());
console.log("lee.sum()",lee.sum());