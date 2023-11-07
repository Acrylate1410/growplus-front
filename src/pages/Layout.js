import { Outlet } from "react-router-dom";
import { useEffect, useRef } from 'react';
const Layout = () => {
    return (
        <>
            <Outlet />
            <ChatBot/>
        </>
)};
/*
<!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "122098227242006889");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
    */
const ChatBot = () => {
    const MessengerRef = useRef();
    useEffect(() => {
        MessengerRef.current.setAttribute('page_id', '122098227242006889');
        MessengerRef.current.setAttribute('attribution', 'biz_inbox');
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v18.0',
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);
    return (
        <>
            <div id="fb-root"></div>
            <div ref={MessengerRef} id="fb-customer-chat" className="fb-customerchat"></div>
        </>
    );
}; 

export default Layout;