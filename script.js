





const _0x5751ae=_0x4299;!function($,x){let e=_0x4299,a=$();for(;;)try{let s=-parseInt(e(324))/1+-parseInt(e(332))/2*(parseInt(e(291))/3)+-parseInt(e(278))/4+-parseInt(e(286))/5*(parseInt(e(322))/6)+parseInt(e(290))/7+-parseInt(e(326))/8*(parseInt(e(294))/9)+parseInt(e(329))/10;if(166368===s)break;a.push(a.shift())}catch(n){a.push(a.shift())}}(_0x104a,166368);const chatBox=document[_0x5751ae(303)](_0x5751ae(277)),userInput=document[_0x5751ae(303)](_0x5751ae(302)),chatContainer=document[_0x5751ae(303)](_0x5751ae(320)),chatBtn=document.getElementById(_0x5751ae(327)),welcomeMessage=_0x5751ae(281),optionsMessage=_0x5751ae(315),mainOptions=[_0x5751ae(284),_0x5751ae(314),_0x5751ae(273),"Contacto","Rese\xf1as",_0x5751ae(306)];function addMessage($,x="bot",e=!0){let a=_0x5751ae,s=document[a(279)](a(330));s.classList[a(312)](a(271),a(x===a(285)?325:297)),s[a(307)]=$,chatBox[a(276)](s),e&&(chatBox[a(305)]=chatBox.scrollHeight)}function showMainOptions(){let $=_0x5751ae;addMessage(optionsMessage,$(316),!1);let x=document[$(279)]("div");x[$(313)][$(312)]($(295)),mainOptions.forEach(e=>{let a=$,s=document[a(279)](a(323));s[a(313)][a(312)](a(309)),s[a(310)]=e,s.onclick=function(){processOption(e)},x[a(276)](s)}),chatBox.appendChild(x),chatBox[$(305)]=chatBox.scrollHeight}function showMenuOptions(){let $=_0x5751ae;addMessage("Estos son los tipos de men\xfas que ofrecemos. Por favor, selecciona una categor\xeda.",$(316),!1);let x=document[$(279)]("div");x.classList[$(312)]($(295)),menuOptions.forEach(e=>{let a=$,s=document[a(279)](a(323));s.classList[a(312)](a(309)),s.innerText=e,s.onclick=function(){processMenu(e)},x.appendChild(s)}),chatBox[$(276)](x),addMessage($(274),$(316),!0)}function processOption($){let x=_0x5751ae;addMessage(x(288)+$+'"',x(285));let e="";switch($){case x(284):e=x(296);break;case x(292):showMenuOptions();return;case x(314):e=x(319);break;case x(273):e=x(272);break;case"Contacto":e=x(317);break;case x(298):e=x(287);break;case x(306):e=x(308);break;default:e=x(293)}addMessage(e,x(316)),askIfWantMore()}function _0x4299($,x){let e=_0x104a();return(_0x4299=function($,x){return e[$-=271]})($,x)}function askIfWantMore(){let $=_0x5751ae;addMessage($(289),$(316),!0)}function _0x104a(){let $=["block","onclick","user-input","getElementById","none","scrollTop","Chef Principal","innerHTML","Nuestro Chef Principal, <strong>Chef Gustavo Luna</strong>, es conocido por sus recetas \xfanicas y creativas.","option-button","innerText","trim","add","classList","Ubicaci\xf3n","Por favor, elige una opci\xf3n:","bot","Cont\xe1ctanos al n\xfamero <strong>+58 987 654 321</strong> o en nuestras redes sociales @lunaMagicaRestaurante.","display","Estamos en la Avenida Central, Edificio Luna M\xe1gica, Ciudad, Estado, Venezuela.","chat-container","value","36FhMLCi","button","109799nacmTw","user-message","7536idnuUO","chat-btn","style","7292670oKBsiC","div","flex","2IoVBjB","message","Para reservaciones, ll\xe1manos al <strong>+58 987 654 321</strong> o reserva a trav\xe9s de nuestra p\xe1gina web.","Reservaciones","Selecciona una categor\xeda para m\xe1s detalles.","toLowerCase","appendChild","chat-box","559180DObSIz","createElement","\xbfDeseas hacer otra consulta o cerrar el chat?","\xa1Bienvenido a Luna M\xe1gica! Soy tu asistente virtual. \xbfEn qu\xe9 puedo ayudarte hoy?","\xa1Gracias por visitarnos! Te esperamos pronto en Luna M\xe1gica.","addEventListener","Horarios","user","67225dUEnCD",'Esto dicen nuestros clientes:<br><strong>Juan P\xe9rez</strong>: "La comida es espectacular y el ambiente m\xe1gico."<br><strong>Mar\xeda L\xf3pez</strong>: "\xa1El mejor restaurante para una cena rom\xe1ntica!"','Cliente: He seleccionado la opci\xf3n: "',"\xbfDeseas saber algo m\xe1s? Si es as\xed, responde solo 'Si'.","865585sywLdR","690186MFCOyY","Men\xfa","Opci\xf3n no v\xe1lida, por favor selecciona una opci\xf3n del men\xfa.","1206DXbhDk","options-container","Nuestro horario es de lunes a domingo de 12:00 pm a 11:00 pm. \xa1Te esperamos!","bot-message","Rese\xf1as","DOMContentLoaded"];return(_0x104a=function(){return $})()}function processUserResponse($){let x=_0x5751ae;"si"===$[x(275)]()?showMainOptions():(addMessage(x(282),x(316)),addMessage(x(280),"bot",!0))}function sendMessage(){let $=_0x5751ae,x=userInput[$(321)][$(311)]();""!==x&&(addMessage(x,$(285)),userInput[$(321)]="",processUserResponse(x))}function toggleChat(){let $=_0x5751ae;chatContainer[$(328)][$(318)]===$(304)||""===chatContainer[$(328)][$(318)]?(chatContainer[$(328)][$(318)]=$(331),chatBtn[$(328)][$(318)]=$(304)):(chatContainer[$(328)][$(318)]=$(304),chatBtn[$(328)][$(318)]=$(300))}document[_0x5751ae(283)](_0x5751ae(299),()=>{let $=_0x5751ae;addMessage(welcomeMessage,$(316),!1),showMainOptions()}),document[_0x5751ae(303)]("send-btn")[_0x5751ae(301)]=sendMessage;
