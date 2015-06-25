
// JavaScript Document

/*-------toggle login Start----------*/
function inputBoxFocus(el) {
    var el = jQuery(el);
    if (el.attr('label') == el.val()) {
        el.val('');
        el.addClass('sign-in');
    }
}
function inputBoxBlur(el) {
    var el = jQuery(el);
    if (el.val() == '') {
        el.val(el.attr('label'));
        el.removeClass('sign-in'); slowlogin
    }
}
/*-------toggle login End----------*/
/*-------toggle login email Start----------*/
function EmailTxtfocus() {

    if (document.getElementById('ctl00_maincontent_txtloginemail').value == 'E-mail address (or member name)')
        document.getElementById('ctl00_maincontent_txtloginemail').value = '';
    document.getElementById('ctl00_maincontent_txtloginemail').className = "sign-in";
}
function EmailTxtblur() {
    if (document.getElementById('ctl00_maincontent_txtloginemail').value == '') {
        document.getElementById('ctl00_maincontent_txtloginemail').value = 'E-mail address (or member name)';
        if (document.getElementById('ctl00_maincontent_txtloginemail').value != '' && document.getElementById('ctl00_maincontent_txtloginemail').value != 'E-mail address (or member name)') {
            document.getElementById('ctl00_maincontent_txtloginemail').className = "sign-in";
        }
        else {
            document.getElementById('ctl00_maincontent_txtloginemail').className = "sign";
        }
    }
   }
//validation for notes
   function validateNotes() {
  var notes = document.getElementById('ctl00_maincontent_fcknotes');
  if ((notes.value == "") || (notes.value == null)) {
  	alert("Please enter a Note");
	    return false;
    }

    return true;
    }

//function samplecheck() {
//	                var emailID = document.getElementById('ctl00_maincontent_txtemails');
//	                if ((emailID.value == null) || (emailID.value == "")) {
//		                document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter at least one email address </ul>";
//		                $find('MPEErrorMessage').show();
//		                //emailID.focus();
//		                return false;
//	                }
//	                
//    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID.value)){
//                        return (true)
//                    }
//                    document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
//                    $find('MPEErrorMessage').show();
//                    return false
//                    }

                    function echeck(str) {

                    	var at = "@"
                    	var dot = "."
                    	var lat = str.indexOf(at)
                    	var lstr = str.length
                    	var ldot = str.indexOf(dot)
//                    	var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
//                    	var illegalChars = /[\(\)\<\>\..\,\;\:\\\"\[\]]/;
//                    	if (emailFilter.test(str)) {
//                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com)  </ul>";
//                    		$find('MPEErrorMessage').show();
//                    		return false;
//                    	}  
                    	if (str.indexOf(at) == -1) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.indexOf(dot) == -1 || str.indexOf(dot) == 0 || str.indexOf(dot) == lstr) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.indexOf(at, (lat + 1)) != -1) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.substring(lat - 1, lat) == dot || str.substring(lat + 1, lat + 2) == dot) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.indexOf(dot, (lat + 2)) == -1) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	if (str.indexOf(" ") != -1) {
                    		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                    		$find('MPEErrorMessage').show();
                    		return false;
                    	}

                    	return true;
                    }
//                    function validateEmailAddr(txtBoxID) {
//       	var emailID = document.getElementById('ctl00_maincontent_' + txtBoxID + '');
//		 if ((emailID.value == null) || (emailID.value == "")) {
//		                document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter at least one email address </ul>";
//		                $find('MPEErrorMessage').show();
//		                //emailID.focus();
//		                return false;
//	                }
//	                if (echeck(emailID.value)==false) {
//	                	emailID.value = ""
//	                	return false;
//	                	//emailID.focus();
//	                }
//	               return true;
//	               }

/*-------toggle login email End----------*/
/*-------toggle login password Start----------*/
function togglePassBox() {
    document.getElementById('ctl00_txtloginpassword').className = 'hide';
    document.getElementById('ctl00_maincontent_txtloginpwd').className = 'sign-in';
    document.getElementById('ctl00_maincontent_txtloginpwd').focus();
}

function toggleTextBox(id) {
    if (id == '') {
        document.getElementById('ctl00_txtloginpassword').className = 'sign';
        document.getElementById('ctl00_maincontent_txtloginpwd').className = 'hide';
        //document.getElementById('ctl00_txtloginpassword').value = 'Password';
    }
}
/*-------toggle password End----------*/

/*-------togglesignup  Email Start----------*/
function SignupEmailTxtfocus() {

    if (document.getElementById('ctl00_txtemail').value == 'E-mail address*')
        document.getElementById('ctl00_txtemail').value = '';
    //document.getElementById('ctl00_txtemail').className = "sign-in";
}
function SignupEmailTxtBlur() {
    if (document.getElementById('ctl00_txtemail').value == '') {
        document.getElementById('ctl00_txtemail').value = 'E-mail address*';
        if (document.getElementById('ctl00_txtemail').value != '' && document.getElementById('ctl00_txtemail').value != 'E-mail address*') {
            //document.getElementById('ctl00_txtemail').className = "sign-in";
        }
        else {
            //document.getElementById('ctl00_txtemail').className = "sign left";
        }
    }

}

/*-------togglesignup  Email End----------*/
/*-------togglesignup   User Name Start----------*/
function SignupUnameTxtfocus() {

    if (document.getElementById('ctl00_txtusername').value == 'Member name (optional)')
        document.getElementById('ctl00_txtusername').value = '';
    document.getElementById('ctl00_txtusername').className = "sign-in";
}
function SignupUnameTxtBlur() {
    if (document.getElementById('ctl00_txtusername').value == '') {
        document.getElementById('ctl00_txtusername').value = 'Member name (optional)';
        if (document.getElementById('ctl00_txtusername').value != '' && document.getElementById('ctl00_txtusername').value != 'Member name (optional)') {
            document.getElementById('ctl00_txtusername').className = "sign-in";
        }
        else {
            document.getElementById('ctl00_txtusername').className = "sign left";
        }
    }

}
/*-------togglesignup  User Name End----------*/

/*-------togglesignup  password Start----------*/
function togglePasBox() {
    document.getElementById('ctl00_txtpassword').className = 'sign-in';
    document.getElementById('ctl00_txtpwd').className = 'hide';
    document.getElementById('ctl00_txtpassword').focus();
}

function toggleTexBox(id) {
    if (id == '') {
        document.getElementById('ctl00_txtpassword').className = 'hide';
        document.getElementById('ctl00_txtpwd').className = 'sign';
    }
}
/*-------togglesignup  password End----------*/
/*-------togglesignup  Re-password Start----------*/
function toggleRetype() {
    document.getElementById('ctl00_txtconfirmpwd').className = 'sign-in';
    document.getElementById('ctl00_txtcfmpwd').className = 'hide';
    document.getElementById('ctl00_txtconfirmpwd').focus();
}

function toggleRetext(id) {
    if (id == '') {
        document.getElementById('ctl00_txtconfirmpwd').className = 'hide';
        document.getElementById('ctl00_txtcfmpwd').className = 'sign';
    }
}


/*-------togglesignup Re-password End----------*/

//................school validation..........
function ValidateSchool() {

    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var msg = "";
    if (document.getElementById("ctl00_maincontent_ddlpayment").value == '1' && !num.test(document.getElementById("ctl00_maincontent_txttution").value)) {
        msg = "<li> Please enter a valid Subscription Fee </li>" + msg;
        errorElementSchool = "ctl00_maincontent_txttution";
    }
    if (document.getElementById("ctl00_maincontent_ddlpayment").value == '2' && !num.test(document.getElementById("ctl00_maincontent_txttution").value)) {
        msg = "<li> Please enter a valid Subscription Fee </li>" + msg;
        errorElementSchool = "ctl00_maincontent_txttution";
    }
    if (document.getElementById("ctl00_maincontent_ddlpayment").value == '--- Select ---') {
        msg = "<li> Please select Payment Model </li>" + msg;
        errorElementSchool = "ctl00_maincontent_ddlpayment";
    }
    if (document.getElementById("ctl00_maincontent_txtshortdesc").value == '') {
        msg = "<li> Please enter a Short Description </li>" + msg;
        errorElementSchool = "ctl00_maincontent_txtshortdesc";
    }
    if (document.getElementById("ctl00_maincontent_txtschoolurl").value != "") {
        if (!reg.test(document.getElementById('ctl00_maincontent_txtschoolurl').value)) {
            msg = "<li> Please enter a valid School URL </li>" + msg;
            errorElementSchool = "ctl00_maincontent_txtschoolurl";
        }
    }
    if (document.getElementById("ctl00_maincontent_txtschoolurl").value == '') {
        msg = "<li> Please enter School URL </li>" + msg;
        errorElementSchool = "ctl00_maincontent_txtschoolurl";
    }
//    if (obj != 'btnCourseAdd') {
//        if (document.getElementById("ctl00_maincontent_txtwebaddress").value != "") {
//            if (!ValidateWebAddress(document.getElementById("ctl00_maincontent_txtwebaddress").value)) {
//                alert('Please enter valid Web Site');
//                document.getElementById("ctl00_maincontent_txtwebaddress").focus();
//                return false;
//            }
//        }
//    }
    if (document.getElementById('ctl00_maincontent_txtschoolname').value == '') {
        msg = "<li> Please enter a valid Name </li>" + msg;
        errorElementSchool = "ctl00_maincontent_txtschoolname";
    }
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }
}

function ValidateWebAddress(incomingString) {
    var companyUrl = incomingString;
    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    if (RegExp.test(companyUrl)) {
        return true;
    }
    else {
        return false;
    }
}

//jquery color dailogbox
function showcolordailog() {

    $('#ctl00_maincontent_txtcolorpicker').ColorPicker({
        onSubmit: function(hsb, hex, rgb, el) {
            $(el).val(hex);
            $(el).ColorPickerHide();
        },
        onBeforeShow: function() {
            $(this).ColorPickerSetColor(this.value);
        }
    })
.bind('keyup', function() {
    $(this).ColorPickerSetColor(this.value);
});
}

function openinvitepopup(sid,sname)
 {
     document.getElementById('ctl00_maincontent_hdnfldsid').value = sid;
     document.getElementById('ctl00_maincontent_hdnfldsname').value = sname;
     $find('MPEinvite').show()
     return false;
}

function closeinvitepopup() {
    document.getElementById('ctl00_maincontent_lblmesg').innerHTML = "";
    $find('MPEinvite').hide()
    return false;
}

//multiple emailid(s) checker
function checkmailids() {
    var mailids = document.getElementById('ctl00_maincontent_txtid').value;
    if (mailids == '') {
        //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Please enter emailID(s)";
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter at least one email address </ul>";
        $find('MPEErrorMessage').show();
        //document.getElementById("ctl00_maincontent_txtinvite").focus();
        return false;
    }
    var arr = new Array(
'.com', '.net', '.org', '.biz', '.coop', '.info', '.museum', '.name', '.pro',
'.edu', '.gov', '.int', '.mil', '.ac', '.ad', '.ae', '.af', '.ag', '.ai', '.al',
'.am', '.an', '.ao', '.aq', '.ar', '.as', '.at', '.au', '.aw', '.az', '.ba', '.bb',
'.bd', '.be', '.bf', '.bg', '.bh', '.bi', '.bj', '.bm', '.bn', '.bo', '.br', '.bs',
'.bt', '.bv', '.bw', '.by', '.bz', '.ca', '.cc', '.cd', '.cf', '.cg', '.ch', '.ci',
'.ck', '.cl', '.cm', '.cn', '.co', '.cr', '.cu', '.cv', '.cx', '.cy', '.cz', '.de',
'.dj', '.dk', '.dm', '.do', '.dz', '.ec', '.ee', '.eg', '.eh', '.er', '.es', '.et',
'.fi', '.fj', '.fk', '.fm', '.fo', '.fr', '.ga', '.gd', '.ge', '.gf', '.gg', '.gh',
'.gi', '.gl', '.gm', '.gn', '.gp', '.gq', '.gr', '.gs', '.gt', '.gu', '.gv', '.gy',
'.hk', '.hm', '.hn', '.hr', '.ht', '.hu', '.id', '.ie', '.il', '.im', '.in', '.io',
'.iq', '.ir', '.is', '.it', '.je', '.jm', '.jo', '.jp', '.ke', '.kg', '.kh', '.ki',
'.km', '.kn', '.kp', '.kr', '.kw', '.ky', '.kz', '.la', '.lb', '.lc', '.li', '.lk',
'.lr', '.ls', '.lt', '.lu', '.lv', '.ly', '.ma', '.mc', '.md', '.mg', '.mh', '.mk',
'.ml', '.mm', '.mn', '.mo', '.mp', '.mq', '.mr', '.ms', '.mt', '.mu', '.mv', '.mw',
'.mx', '.my', '.mz', '.na', '.nc', '.ne', '.nf', '.ng', '.ni', '.nl', '.no', '.np',
'.nr', '.nu', '.nz', '.om', '.pa', '.pe', '.pf', '.pg', '.ph', '.pk', '.pl', '.pm',
'.pn', '.pr', '.ps', '.pt', '.pw', '.py', '.qa', '.re', '.ro', '.rw', '.ru', '.sa',
'.sb', '.sc', '.sd', '.se', '.sg', '.sh', '.si', '.sj', '.sk', '.sl', '.sm', '.sn',
'.so', '.sr', '.st', '.sv', '.sy', '.sz', '.tc', '.td', '.tf', '.tg', '.th', '.tj',
'.tk', '.tm', '.tn', '.to', '.tp', '.tr', '.tt', '.tv', '.tw', '.tz', '.ua', '.ug',
'.uk', '.um', '.us', '.uy', '.uz', '.va', '.vc', '.ve', '.vg', '.vi', '.vn', '.vu',
'.ws', '.wf', '.ye', '.yt', '.yu', '.za', '.zm', '.zw');

    var sd = mailids;
    var emailIdColl = sd.split(',');
    var emailIdString = '';
    for (var k = 0; k < emailIdColl.length; k++) {
        if (k == emailIdColl.length - 1) {
            emailIdString += trim(emailIdColl[k]);
        }
        else {
            emailIdString += trim(emailIdColl[k]) + ',';
        }
    }
    sd = emailIdString;
        var ids = sd.split("\n");
    var val = true;

    for (var j = 0; j < ids.length; j++) {
        var mai = ids[j];
        var dot = mai.lastIndexOf(".");
        var ext = mai.substring(dot, mai.length);
        var at = mai.indexOf("@");
        var dom = dot - at;
        var sp = mai.indexOf(" ");
        if (dom >= 4 && at > 1 && sp == -1) {
            for (var i = 0; i < arr.length; i++) {
                if (ext == arr[i]) {
                    val = true;
                    break;
                }
                else {
                    val = false;
                }
            }
            if (val == false) {
                //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
                document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                $find('MPEErrorMessage').show();
                return false;
            }
        }
        else {
            //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
            document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
            $find('MPEErrorMessage').show();
            return false;
        }
    }

    return true;
}
// Fix for Story ID:12392579 START
function confirmInvitation() {
    var rbtnList = document.getElementById('ctl00_maincontent_rbtnlstroles').getElementsByTagName('input');
    var rbtnValue = '';
    for (var i = 0; i < rbtnList.length; i++) {
        if (rbtnList[i].type == "radio") {
            if (rbtnList[i].checked) {
                rbtnValue = rbtnList[i].value;
            }
        }
    }

    if (rbtnValue == "5") {
        if (confirm('You are about to invite one or more people to join this School in the role of "Founder."  This gives them complete control over the school, including the right to invite other Founders and delete your Founder account.  Are you sure?')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}
//Fix for Story ID:10221059
function confirmTrainerInvitation() {
    var rbtnList = document.getElementById('ctl00_maincontent_rbTrainerRoles').getElementsByTagName('input');
    var rbtnValue = '';
    for (var i = 0; i < rbtnList.length; i++) {
        if (rbtnList[i].type == "radio") {
            if (rbtnList[i].checked) {
                rbtnValue = rbtnList[i].value;
            }
        }
    }

    if (rbtnValue == "Administrator") {
        if (confirm('The invitation(s) you are about to send will grant Administrator rights, which will allow the recipients to edit all aspects of your Training Company or Group, including the address to which Phobos LMSwill direct your earnings.  Are you sure?')) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}




// Fix for Story ID:12392579 END
//Mails
function validateEmailAddr(txtBoxID) {
    var mailids = document.getElementById('ctl00_maincontent_' + txtBoxID).value;

    if ((mailids == ' ') || (mailids == null)) {
        //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Please enter emailID(s)";
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter at least one email address </ul>";
        $find('MPEErrorMessage').show();
        //document.getElementById("ctl00_maincontent_txtinvite").focus();
        return false;
    }
    var arr = new Array(
'.com', '.net', '.org', '.biz', '.coop', '.info', '.museum', '.name', '.pro',
'.edu', '.gov', '.int', '.mil', '.ac', '.ad', '.ae', '.af', '.ag', '.ai', '.al',
'.am', '.an', '.ao', '.aq', '.ar', '.as', '.at', '.au', '.aw', '.az', '.ba', '.bb',
'.bd', '.be', '.bf', '.bg', '.bh', '.bi', '.bj', '.bm', '.bn', '.bo', '.br', '.bs',
'.bt', '.bv', '.bw', '.by', '.bz', '.ca', '.cc', '.cd', '.cf', '.cg', '.ch', '.ci',
'.ck', '.cl', '.cm', '.cn', '.co', '.cr', '.cu', '.cv', '.cx', '.cy', '.cz', '.de',
'.dj', '.dk', '.dm', '.do', '.dz', '.ec', '.ee', '.eg', '.eh', '.er', '.es', '.et',
'.fi', '.fj', '.fk', '.fm', '.fo', '.fr', '.ga', '.gd', '.ge', '.gf', '.gg', '.gh',
'.gi', '.gl', '.gm', '.gn', '.gp', '.gq', '.gr', '.gs', '.gt', '.gu', '.gv', '.gy',
'.hk', '.hm', '.hn', '.hr', '.ht', '.hu', '.id', '.ie', '.il', '.im', '.in', '.io',
'.iq', '.ir', '.is', '.it', '.je', '.jm', '.jo', '.jp', '.ke', '.kg', '.kh', '.ki',
'.km', '.kn', '.kp', '.kr', '.kw', '.ky', '.kz', '.la', '.lb', '.lc', '.li', '.lk',
'.lr', '.ls', '.lt', '.lu', '.lv', '.ly', '.ma', '.mc', '.md', '.mg', '.mh', '.mk',
'.ml', '.mm', '.mn', '.mo', '.mp', '.mq', '.mr', '.ms', '.mt', '.mu', '.mv', '.mw',
'.mx', '.my', '.mz', '.na', '.nc', '.ne', '.nf', '.ng', '.ni', '.nl', '.no', '.np',
'.nr', '.nu', '.nz', '.om', '.pa', '.pe', '.pf', '.pg', '.ph', '.pk', '.pl', '.pm',
'.pn', '.pr', '.ps', '.pt', '.pw', '.py', '.qa', '.re', '.ro', '.rw', '.ru', '.sa',
'.sb', '.sc', '.sd', '.se', '.sg', '.sh', '.si', '.sj', '.sk', '.sl', '.sm', '.sn',
'.so', '.sr', '.st', '.sv', '.sy', '.sz', '.tc', '.td', '.tf', '.tg', '.th', '.tj',
'.tk', '.tm', '.tn', '.to', '.tp', '.tr', '.tt', '.tv', '.tw', '.tz', '.ua', '.ug',
'.uk', '.um', '.us', '.uy', '.uz', '.va', '.vc', '.ve', '.vg', '.vi', '.vn', '.vu',
'.ws', '.wf', '.ye', '.yt', '.yu', '.za', '.zm', '.zw');

    var sd = mailids;
    var emailIdColl = sd.split(',');
    var emailIdString = '';
    for (var k = 0; k < emailIdColl.length; k++) {
        if (k == emailIdColl.length - 1) {
            emailIdString += trim(emailIdColl[k]);
        }
        else {
            emailIdString += trim(emailIdColl[k]) + ',';
        }
    }
    sd = emailIdString;
    var ids = sd.split("\n");
    var val = true;

    for (var j = 0; j < ids.length; j++) {
        var mai = ids[j];
        var dot = mai.lastIndexOf(".");
        var ext = mai.substring(dot, mai.length);
        var at = mai.indexOf("@");
        var dom = dot - at;
        var sp = mai.indexOf(" ");
        if (dom >= 4 && at > 1 && sp == -1) {
            for (var i = 0; i < arr.length; i++) {
                if (ext == arr[i]) {
                    val = true;
                    break;
                }
                else {
                    val = false;
                }
            }

            var at = "@";
            var dot1 = ".";
            var str = ids[j];
            var lat = str.indexOf(at);
            var lstr = str.length;
            var ldot = str.indexOf(dot);
            var reg = /[\(\)\<\>\&\#\*\+\=\!\~\}\{\`\?\/\'\;\:\\\"\[\]]/;
            if (str.indexOf(dot1) == -1 || str.indexOf(dot1) == 0 || str.indexOf(dot1) == lstr || reg.test(str)) {
                //alert("Invalid E-mail ID")
                val = false;
            }


            if (ids[j].indexOf('..') > 0 || ids[j].indexOf('@@') > 0 || ids[j].indexOf('.,') > 0 || ids[j].indexOf('@,') > 0 || ids[j].indexOf(',@') > 0 || ids[j].indexOf(',.') > 0 || ids[j].indexOf('.@') > 0 || ids[j].indexOf('@.') > 0 || ids[j].split('.').length > 3) {
                val = false;
            }
            if (ids[j].indexOf(',') > 0) {
                val = true;
            }
            if (val == false) {
                //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
                document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
                $find('MPEErrorMessage').show();
                return false;
            }
            if (ids[j].split(',').length > 20) {
                document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> You can enter only 20 email addresses at a time.  </ul>";
                $find('MPEErrorMessage').show();
                return false;
            }
        }
        else {
            //document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
            document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
            $find('MPEErrorMessage').show();
            return false;
        }
    }
    if (txtBoxID == "txtid1" || txtBoxID == "txtEmailAddress") {
        if (confirmInvitation()) {
            return true;
        }
        else {
            return false;
        }
    }
    
    //Invitation for Trainer profile page
    if (txtBoxID == "txtid") {
        if (confirmTrainerInvitation()) {
            return true;
        }
        else {
            return false;
        }
    }
    
    return true;
}

//---------------------characters count


function slimiter() {
    var count = "150";
    var tex = document.getElementById('ctl00_maincontent_txtshortdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtshortdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = '#333333';
    }
}


function llimiter() {
    var count = "300";
    var tex = document.getElementById('ctl00_maincontent_txtlongdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lblldisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lblldisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtlongdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lblldisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lblldisplay').style.color = '#333333';
    }
}

////---------------schoollogoupload end-----------

//--------------check school URL
var errorElementSchool =null;
function checkschoolURL() {
    var flg = true;
    if (document.getElementById("ctl00_maincontent_txtschoolurl").value == '') {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter School URL </ul>";
        errorElementSchool = "ctl00_maincontent_txtschoolurl";
        $find('MPEErrorMessage').show();
        flg = false;
    }
    return flg;
}

function schoolsreset() {

    document.getElementById('ctl00_maincontent_txtschoolname').value = '';
    document.getElementById('ctl00_maincontent_txtschoolurl').value = '';
    document.getElementById('ctl00_maincontent_txtshortdesc').value = '';
    document.getElementById('ctl00_maincontent_txtlongdesc').value = '';
    document.getElementById('ctl00_maincontent_lstindustries').selectedIndex = -1;
    document.getElementById('ctl00_maincontent_lstsubjects').selectedIndex = -1;
    document.getElementById('ctl00_maincontent_txttags').value = '';
    document.getElementById('ctl00_maincontent_ddlpayment').value = '--- Select ---';
    document.getElementById('ctl00_maincontent_txttution').value = '';
    document.getElementById('ctl00_maincontent_txtcolorpicker').value = 'ffffff';
    document.getElementById('ctl00_maincontent_txtwebaddress').value = '';
    document.getElementById('ctl00_maincontent_txtstreetaddress').value = '';
    document.getElementById('ctl00_maincontent_txtcity').value = '';
    document.getElementById('ctl00_maincontent_txtstate').value = '';
    document.getElementById('ctl00_maincontent_rdoaccess1').checked = true;
    document.getElementById('ctl00_maincontent_txtzip').value = '';
    document.getElementById('ctl00_maincontent_txtcname').value = '';
    document.getElementById('ctl00_maincontent_txtemail').value = '';
    document.getElementById('ctl00_maincontent_txtphno').value = '';
    document.getElementById('ctl00_maincontent_ddlcountry').selectedIndex = 0;
    return false;

}

function resetschools() {
    return true;
}
//--------------------Series validations
/*function ValidateLessonPlans() {

    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var flg = true;
    if (document.getElementById('ctl00_maincontent_txttitle').value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter Title";
        document.getElementById("ctl00_maincontent_txttitle").focus();
        flg = false;
    }
    else if (document.getElementById("ctl00_maincontent_txtshortdesc").value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter Short Description";
        document.getElementById("ctl00_maincontent_txtshortdesc").focus();
        flg = false;
    }
    else if (document.getElementById("ctl00_maincontent_ddlmaininds").value == '--- Select ---') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Main Industry";
        document.getElementById("ctl00_maincontent_ddlmaininds").focus();
        flg = false;
    }
    else if (document.getElementById("ctl00_maincontent_ddlmainsbjt").value == '--- Select ---') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Main Subject";
        document.getElementById("ctl00_maincontent_ddlmainsbjt").focus();
        flg = false;
    }
    //    else if (document.getElementById("ctl00_maincontent_ddldlyft").value == '--- Select ---') {
    //    document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Delivery Format";
    //        document.getElementById("ctl00_maincontent_ddldlyft").focus();
    //        flg = false;
    //    }
    //    else if (document.getElementById("ctl00_maincontent_ddllang").value == '--- Select ---') {
    //        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Language";
    //        document.getElementById("ctl00_maincontent_ddllang").focus();
    //        flg = false;
    //    }
    //    else if (document.getElementById("ctl00_maincontent_ddllevel").value == '--- Select ---') {
    //        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Level";
    //        document.getElementById("ctl00_maincontent_ddllevel").focus();
    //        flg = false;
    //    }
        
    return flg;
}
*/
// Validation function changed for lesson plan
function ValidateLessonPlans() {
    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var msg = "";

    if (document.getElementById("ctl00_maincontent_ddlmainsbjt").value == '--- Select ---') {
        errorElement = "ctl00_maincontent_ddlmainsbjt";
        msg = "<li>Please select Main Subject</li>" + msg;
    }
    if (document.getElementById("ctl00_maincontent_ddlmaininds").value == '--- Select ---') {
        errorElement = "ctl00_maincontent_ddlmaininds";
        msg = "<li>Please select Main Industry</li>" + msg;
    }
    if (document.getElementById("ctl00_maincontent_txtshortdesc").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtshortdesc";
        msg = "<li>Please enter Short Description</li>" + msg;
    }
    if (document.getElementById("ctl00_maincontent_txttitle").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txttitle";
        msg = "<li>Please enter Title</li>" + msg;
    }
//    if (document.getElementById("ctl00_maincontent_rdoaccess1").value.replace(" ", "") == "") {
//        errorElement = "ctl00_maincontent_rdoaccess1";
//        msg = "<li>Please enter Address </li>" + msg;
//    }

    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_divErrDialogContent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorDialog').show();
        return false;
    }
    else
        return true;
}
//--------------------- Series characters count


function planslimiter() {
    var count = "150";
    var tex = document.getElementById('ctl00_maincontent_txtshortdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtshortdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = '#333333';
    }
}


function planllimiter() {
    //var count = "300";
    //For fixing Story ID: 4231248  Allow up to 1500 characters including spaces
    var count = "1500";
    var tex = document.getElementById('ctl00_maincontent_txtlongdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lblldisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lblldisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtlongdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lblldisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lblldisplay').style.color = '#333333';
    }
}

//----------------reset Series

function plansreset() {

    document.getElementById('ctl00_maincontent_txttitle').value = '';
    document.getElementById('ctl00_maincontent_txtshortdesc').value = '';
    document.getElementById('ctl00_maincontent_txtlongdesc').value = '';
//    document.getElementById('ctl00_maincontent_txtprice').value = '';
//    document.getElementById('ctl00_maincontent_txtduration').value = '';
    document.getElementById('ctl00_maincontent_ddlmaininds').value = '--- Select ---';
    document.getElementById('ctl00_maincontent_txttags').value = '';
    document.getElementById('ctl00_maincontent_ddlmainsbjt').value = '--- Select ---';
    document.getElementById('ctl00_maincontent_txtcrtfcn').value = '';
    document.getElementById('ctl00_maincontent_txtwsdtake').value = '';
    document.getElementById('ctl00_maincontent_ddldlyft').value = 0;
    document.getElementById('ctl00_maincontent_ddllang').value = 0;
    document.getElementById('ctl00_maincontent_ddllevel').value = 0;
    document.getElementById('ctl00_maincontent_rdoaccess1').checked = true;
    //document.getElementById('ctl00_maincontent_lstindustries').selectedIndex = -1;
    //document.getElementById('ctl00_maincontent_lstsubjects').selectedIndex = -1;
    return false;
}

function resetplans() {
    return true;

}

function changethumbnails() {
    document.getElementById("anchorlist").className = 'list-view-active';
    document.getElementById("anchorthumb").className = 'list-view-inactive';
    document.getElementById("divthumb").style.display = 'inline';
    document.getElementById("divlist").style.display = 'none';

}

function changelists() {
    document.getElementById("anchorlist").className = 'list-view-inactive';
    document.getElementById("anchorthumb").className = 'list-view-active';
    document.getElementById("divthumb").style.display = 'none';
    document.getElementById("divlist").style.display = 'inline';
}

//------------------------Add Libraries----------
var errorElementLibrary = null;
function validatelibrary() {

    var msg = "";
    if (document.getElementById('ctl00_maincontent_ddlaccess').value == -1) {
        msg = "<li>Please select Access</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_ddlaccess";
        
    }
     if (document.getElementById('ctl00_maincontent_txtshortdesc').value == '') {
           msg = "<li>Please enter Short Description</li>" + msg ;
            errorElementLibrary = "ctl00_maincontent_txtshortdesc";
            
        }
    if (document.getElementById('ctl00_maincontent_txtlibname').value == '') {
        msg = "<li>Please enter Library Name</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_txtlibname";
    }
  
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else{
        return true;
        }

}

function validatefilepopup() {

    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var msg = "";
    
    if (document.getElementById("ctl00_maincontent_ddlaccessupload").value == -1) {
        msg = "<li>Please select Access</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_ddlaccessupload";
    }
    if (document.getElementById("ctl00_maincontent_ddlformat").value == -1) {
        msg = "<li>Please select Format</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_ddlformat";
    }
    if (document.getElementById("ctl00_maincontent_ddltype").value == -1){
        msg = "<li>Please select Type</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_ddltype";
    }
//    if (document.getElementById("ctl00_maincontent_txtcost").value != "") {
//        if (!num.test(document.getElementById("ctl00_maincontent_txtcost").value)) {
//            msg = "<li>Please enter valid Cost</li>" + msg;
//            errorElementLibrary = "ctl00_maincontent_txtcost";
//        }
//    }
    if (document.getElementById('ctl00_maincontent_txtname').value == '') {
        msg = "<li>Please enter Library Name to Display </li>" + msg;
        errorElementLibrary = "ctl00_maincontent_txtname";
    }
    if (document.getElementById("ctl00_maincontent_lblfilename").innerHTML == "Click Upload button to add file") {
        msg = "<li>Please upload the File</li>" + msg;
        errorElementLibrary = "ctl00_maincontent_lblfilename";
        }
    if (document.getElementById("ctl00_maincontent_rdocustom").checked) {
         if (document.getElementById("ctl00_maincontent_lblimageiconname").innerHTML == "") {
             msg = "<li>Please Upload Custom Image to Show</li>" + msg;
             errorElementLibrary = "ctl00_maincontent_rdocustom";
              
         }
    }
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else
        return true;

}
//--------------------- reset libraries----------------

function libraryreset() {
    document.getElementById('ctl00_maincontent_txtlibname').value = '';
    document.getElementById('ctl00_maincontent_txtshortdesc').value = '';
    document.getElementById('ctl00_maincontent_ddlaccess').value = -1;
    return false;
}

function resetlibrary() {
    return true;
}


//--------------------- Series characters count


function libryslimiter() {
    var count = "150";
    var tex = document.getElementById('ctl00_maincontent_txtshortdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtshortdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lblsdisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lblsdisplay').style.color = '#333333';
    }
}

//----------------------------add file validation

function validatefile() {

    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var flg = true;

    if (document.getElementById('ctl00_maincontent_txtname').value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter Library Name to Display";
        document.getElementById("ctl00_maincontent_txtname").focus();
        flg = false;
    }

   else if (document.getElementById('ctl00_maincontent_txtcost').value != '' && !num.test(document.getElementById("ctl00_maincontent_txtcost").value)) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter valid Cost";
        document.getElementById("ctl00_maincontent_txtcost").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddltype").value == -1) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Type";
        document.getElementById("ctl00_maincontent_ddltype").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddlformat").value == -1) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Format";
        document.getElementById("ctl00_maincontent_ddlformat").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddlaccess").value == -1) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Access";
        document.getElementById("ctl00_maincontent_ddlaccess").focus();
        flg = false;
    }

    return flg;

}

//-------------------------reset files---------

function filereset() {
    document.getElementById('ctl00_maincontent_txtname').value = '';
    document.getElementById('ctl00_maincontent_txtcost').value = '';
    document.getElementById('ctl00_maincontent_txtdescription').value = '';
    document.getElementById('ctl00_maincontent_ddltype').value = -1;
    document.getElementById('ctl00_maincontent_ddlformat').value = -1;
    document.getElementById('ctl00_maincontent_ddlaccess').value = -1;
    document.getElementById('ctl00_maincontent_rdogeneric').checked = false;
    document.getElementById('ctl00_maincontent_rdocustom').checked = false;
    document.getElementById("ctl00_maincontent_pnlupload").style.display = 'none';
    return false;
}
function resetfile() {
    return true;
}

//--------------------Request a Course---------

function requestcoursevalidate() {
    var reg = /^[a-zA-Z0-9]+$/;
    var num = /^[0-9]+$/;
    var flg = true;

    if (document.getElementById('ctl00_maincontent_txtpjtname').value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter Project Name";
        document.getElementById("ctl00_maincontent_txtpjtname").focus();
        flg = false;
    }

    else if (document.getElementById('ctl00_maincontent_txtshortdesc').value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter Brief Description";
        document.getElementById("ctl00_maincontent_txtshortdesc").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddlindustry").value == 0) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Industry";
        document.getElementById("ctl00_maincontent_ddlindustry").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddlsubject").value == 0) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Subject";
        document.getElementById("ctl00_maincontent_ddlsubject").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_ddlaccess").value == 0) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please select Audience";
        document.getElementById("ctl00_maincontent_ddlaccess").focus();
        flg = false;
    }
    return flg;
}

function reqcourselimiter() {
    var count = "350";
    var tex = document.getElementById('ctl00_maincontent_txtshortdesc').value;
    var len = tex.length;
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('ctl00_maincontent_lbldisplay').style.color = 'red';
        document.getElementById('ctl00_maincontent_lbldisplay').innerHTML = "0 characters remaining.";
        document.getElementById('ctl00_maincontent_txtshortdesc').value = tex;
        return false;
    }
    else {
        document.getElementById('ctl00_maincontent_lbldisplay').innerHTML = count - len + " characters remaining.";
        document.getElementById('ctl00_maincontent_lbldisplay').style.color = '#333333';
    }
}

function reqcoursereset() {
    document.getElementById('ctl00_maincontent_txtpjtname').value = '';
    document.getElementById('ctl00_maincontent_txtshortdesc').value = '';
    document.getElementById("ctl00_maincontent_ddlindustry").selectedIndex = 0;
    document.getElementById("ctl00_maincontent_ddlsubject").selectedIndex = 0;
    document.getElementById("ctl00_maincontent_txtdate").value = '';
    document.getElementById("ctl00_maincontent_ddlaccess").selectedIndex = 0;
    return false;
}

function resetreqcourse() {
    return true;
}

function requestdescclosepopup() {
    $find('MPEdescn').hide()
    return false;
}

function requestlinksclosepopup() {
    $find('MPElinks').hide();
    document.getElementById('ctl00_maincontent_txtlinks').value = '';
    return false;
}
function openindustriespopup() {
    document.getElementById('ctl00_maincontent_divindustries').className = 'show';
    $find('MPEindustries').show()
    return false;
}

function opensubjectspopup() {
    document.getElementById('ctl00_maincontent_divsubjects').className = 'show';
    $find('MPEsubjects').show()
    return false;
}

function openformatspopup() {
    document.getElementById('ctl00_maincontent_divformats').className = 'show';
    $find('MPEformats').show()
    return false;
}

function openlanguagespopup() {
    document.getElementById('ctl00_maincontent_divlanguages').className = 'show';
    $find('MPElanguages').show()
    return false;
}

function openlevelspopup() {
    document.getElementById('ctl00_maincontent_divlevels').className = 'show';
    $find('MPElevels').show()
    return false;
}

function opentypespopup() {
    document.getElementById('ctl00_maincontent_divtypes').className = 'show';
    $find('MPEtypes').show()
    return false;
}

function openimgformatspopup() {
    document.getElementById('ctl00_maincontent_divimgformats').className = 'show';
    $find('MPEimgformats').show()
    return false;
}

function validatecoursecost() {

    var flg = true;
    if (document.getElementById("ctl00_maincontent_ddlCostFilter").value != '0' && document.getElementById("ctl00_maincontent_txtCostFilter").value == '') {
        document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "You must enter an amount";
        flg = false;
    }
    if (document.getElementById("ctl00_maincontent_ddlCostFilter").value != '0') {
        if (isNaN(document.getElementById('ctl00_maincontent_txtCostFilter').value)) {
            document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Cost should be a numeric value";
            document.getElementById("ctl00_maincontent_txtCostFilter").focus();
            flg = false;
        }
        else if (parseInt(document.getElementById('ctl00_maincontent_txtCostFilter').value) < 0) {
            document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Please enter a valid cost";
            document.getElementById("ctl00_maincontent_txtCostFilter").focus();
            flg = false;
        }
    }

//    if (isNaN(document.getElementById('ctl00_maincontent_txtcrsemincost').value)) {
//        document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Min Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtcrsemincost").focus();
//        flg = false;
//    }
//    else if (isNaN(document.getElementById('ctl00_maincontent_txtcrsemaxcost').value)) {
//        document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Max Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtcrsemaxcost").focus();
//        flg = false;
//    }
//    else if (document.getElementById('ctl00_maincontent_txtcrsemaxcost').value > 0 && document.getElementById('ctl00_maincontent_txtcrsemincost').value > 0) {
//        if (document.getElementById('ctl00_maincontent_txtcrsemaxcost').value - document.getElementById('ctl00_maincontent_txtcrsemincost').value <= 0) {
//            document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Max Cost should be greater than Min Cost";
//            document.getElementById("ctl00_maincontent_txtcrsemincost").focus();
//            flg = false;
//        }
//    }
    return flg;
}

function validateplancost() {

    var flg = true;
    if (document.getElementById("ctl00_maincontent_ddlCostFilter").value != '0' && document.getElementById("ctl00_maincontent_txtCostFilter").value == '') {
        document.getElementById("ctl00_maincontent_lblplanerrmsg").innerHTML = "You must enter an amount";
        flg = false;
    }

    if (isNaN(document.getElementById('ctl00_maincontent_txtCostFilter').value)) {
        document.getElementById("ctl00_maincontent_lblplanerrmsg").innerHTML = "Cost should be a numeric value";
        document.getElementById("ctl00_maincontent_txtCostFilter").focus();
        flg = false;
    }
    else if (parseInt(document.getElementById('ctl00_maincontent_txtCostFilter').value) < 0) {
        document.getElementById("ctl00_maincontent_lblcrseerrmsg").innerHTML = "Please enter a valid cost";
        document.getElementById("ctl00_maincontent_txtCostFilter").focus();
        flg = false;
    }

//    if (isNaN(document.getElementById('ctl00_maincontent_txtplanmincost').value)) {
//        document.getElementById("ctl00_maincontent_lblplanerrmsg").innerHTML = "Min Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtplanmincost").focus();
//        flg = false;
//    }
//    else if (isNaN(document.getElementById('ctl00_maincontent_txtplanmaxcost').value)) {
//        document.getElementById("ctl00_maincontent_lblplanerrmsg").innerHTML = "Max Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtplanmaxcost").focus();
//        flg = false;
//    }
//    else if (document.getElementById('ctl00_maincontent_txtplanmaxcost').value > 0 && document.getElementById('ctl00_maincontent_txtplanmincost').value > 0) {
//    if (document.getElementById('ctl00_maincontent_txtplanmaxcost').value - document.getElementById('ctl00_maincontent_txtplanmincost').value <= 0) {
//        document.getElementById("ctl00_maincontent_lblplanerrmsg").innerHTML = "Max Cost should be greater than Min Cost";
//            document.getElementById("ctl00_maincontent_txtplanmincost").focus();
//            flg = false;
//        }
//    }
    return flg;
}


function validatelibrarycost() {

    var flg = true;

    if (document.getElementById("ctl00_maincontent_ddlCostFilter").value != '0' && document.getElementById("ctl00_maincontent_txtCostFilter").value == '') {
        document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "You must enter an amount";
        flg = false;
    }
    if (isNaN(document.getElementById('ctl00_maincontent_txtCostFilter').value)) {
        document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "Cost should be a numeric value";
        document.getElementById("ctl00_maincontent_txtCostFilter").focus();
        flg = false;
    }
    else if (parseInt(document.getElementById('ctl00_maincontent_txtCostFilter').value) < 0) {
    document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "Please enter a valid cost";
        document.getElementById("ctl00_maincontent_txtCostFilter").focus();
        flg = false;
    }
    
    
//    if (isNaN(document.getElementById('ctl00_maincontent_txtlbrymincost').value)) {
//        document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "Min Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtlbrymincost").focus();
//        flg = false;
//    }
//    else if (isNaN(document.getElementById('ctl00_maincontent_txtlbrymaxcost').value)) {
//    document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "Max Cost should be Numeric";
//        document.getElementById("ctl00_maincontent_txtlbrymaxcost").focus();
//        flg = false;
//    }
//    else if (document.getElementById('ctl00_maincontent_txtlbrymaxcost').value > 0 && document.getElementById('ctl00_maincontent_txtlbrymincost').value > 0) {
//    if (document.getElementById('ctl00_maincontent_txtlbrymaxcost').value - document.getElementById('ctl00_maincontent_txtlbrymincost').value <= 0) {
//        document.getElementById("ctl00_maincontent_lbllibraryerrmsg").innerHTML = "Max Cost should be greater than Min Cost";
//            document.getElementById("ctl00_maincontent_txtlbrymincost").focus();
//            flg = false;
//        }
//    }
    return flg;
}

function fnsearchvalidaion() {
    
    var flg = true;

    if (document.getElementById('ctl00_maincontent_txtsearch').value == 'Search by Course Title') {
        /* For fixing story id : 5082855 START */
        //document.getElementById("ctl00_maincontent_lblsearchmessage").innerHTML = "Please enter course name";
        document.getElementById("ctl00_maincontent_lblsearchmessage").innerHTML = "Please enter search keywords";
        /* For fixing story id : 5082855 END */
        document.getElementById("ctl00_maincontent_txtsearch").focus();
        flg = false;
    }
    return flg;
}

function validatelink() {

    var flg = true;

    if (document.getElementById('ctl00_maincontent_txtlinks').value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter course links";
        document.getElementById("ctl00_maincontent_txtlinks").focus();
        flg = false;
    }
    return flg;
}



function getpanelshow() {
    if (document.getElementById("ctl00_maincontent_rdogeneric").checked) {
        document.getElementById("ctl00_maincontent_pnlupload").style.display = 'none';
    }
    if (document.getElementById("ctl00_maincontent_rdocustom").checked) {
        document.getElementById("ctl00_maincontent_pnlupload").style.display = 'block';
        document.getElementById("ctl00_maincontent_lblmessg").innerHTML = "";
    }
}

function tabSelected1(tab_id, id, class1, class2) {
    if (id == 1) {
        document.getElementById('tab_' + tab_id).className = class1;
    }
    else {
        document.getElementById('tab_' + tab_id).className = class2;
    }
}
function toggleMenu(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
        document.getElementById('close').src = 'images/two.gif';
    }
    else {
        document.getElementById(id).style.display = 'none';
        document.getElementById('close').src = 'images/one.gif';
    }
}

function toggleAdd(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
}
/*--------------------------------*/
function toggleMenu1() {
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu1').style.display = 'none';
}

function toggleMenu2() {
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu1').style.display = 'none';
}

function toggleMenu3() {
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu0').style.display = 'none';
    document.getElementById('ctl00_maincontent_dlst1_ctl00_menu1').style.display = 'inline';
}


function toggleMenu4() {
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu1').style.display = 'none';
}

function toggleMenu5() {
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu1').style.display = 'none';
}

function toggleMenu6() {
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu0').style.display = 'none';
    document.getElementById('ctl00_maincontent_dlst1_ctl01_menu1').style.display = 'inline';
}


function toggleMenu7() {
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu1').style.display = 'none';
}

function toggleMenu8() {
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu1').style.display = 'none';
}

function toggleMenu9() {
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu0').style.display = 'none';
    document.getElementById('ctl00_maincontent_dlst1_ctl02_menu1').style.display = 'inline';
}



function toggleMenu10() {
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu1').style.display = 'none';
}

function toggleMenu11() {
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu1').style.display = 'none';
}

function toggleMenu12() {
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu0').style.display = 'none';
    document.getElementById('ctl00_maincontent_dlst1_ctl03_menu1').style.display = 'inline';
}


function toggleMenu13() {
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu1').style.display = 'none';
}

function toggleMenu14() {
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu0').style.display = 'inline';
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu1').style.display = 'none';
}

function toggleMenu15() {
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu0').style.display = 'none';
    document.getElementById('ctl00_maincontent_dlst1_ctl04_menu1').style.display = 'inline';
}

function Addcoursescount() {

    var elmnt = document.getElementById("ctl00_maincontent_gdvwcourses");
    var rCount = elmnt.rows.length;
    var rowIdx = 1; var count = 0;

    if (navigator.appName == "Microsoft Internet Explorer") {
        for (rowIdx; rowIdx <= rCount - 1; rowIdx++) {
            var rowElement = elmnt.rows[rowIdx];
            var chkBox = rowElement.cells[0].firstChild;
            if (chkBox.checked == true) {
                count = count + 1;
            }
        }
    }
    else {
        for (rowIdx; rowIdx <= rCount - 1; rowIdx++) {
            var rowElement = elmnt.rows[rowIdx];
            var chkBox = rowElement.cells[0].childNodes[1];
            if (chkBox.checked == true) {
                count = count + 1;
            }
        }
    }

    if (count == 0) {
        document.getElementById("ctl00_maincontent_lblchkcount").innerHTML = "Please select one or more courses to add";
        return false;
    }
    else {
        document.getElementById("ctl00_maincontent_lblchkcount").innerHTML = "";
        return true;
    }
}

function toggleMenuDown() {

    document.getElementById('menu0').style.display = 'block';
    document.getElementById('menu1').style.display = 'none';

}
function toggleAdd(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
}

/*---------menu drop-----------------*/
function findPos(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return [curleft, curtop];
}


function displayDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links";
    //document.getElementById('active-' + id).className = 'activenew';
}

function hideDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links hide";
    //document.getElementById('active-' + id).className = 'tab-link';
}
function displaynewDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links";
    document.getElementById('active-' + id).className = 'activenew';
}

function hidenewDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links hide";
    document.getElementById('active-' + id).className = 'deactivenew';
}
/*--------------------------------*/
function toggle(id) { try { var e = document.getElementById(id); if (e == null) return; if (e.style.display != "none") { e.style.display = "none"; var e = document.getElementById("sign" + id).className = "course-wrap"; } else { e.style.display = "block"; var e = document.getElementById("sign" + id).className = "course-wrapp"; } } catch (exception) { } }


function advanced(id) { try { var e = document.getElementById(id); if (e == null) return; if (e.style.display != "none") { e.style.display = "none"; var e = document.getElementById("sign" + id).className = "advanced-wrap"; } else { e.style.display = "block"; var e = document.getElementById("sign" + id).className = "advanced-wrapp"; } } catch (exception) { } }

/*-------course tabs-------------*/
function display(a) {

    for (var k = 1; k <= 6; k++) {
        if (k != a)
            document.getElementById('cnt' + k).style.display = "none";
    }
    if (document.getElementById('cnt' + a).style.display == "none") {
        document.getElementById('cnt' + a).style.display = '';
    }
    else {
        document.getElementById('cnt' + a).style.display = "none";
    }

}


/*----------------tabs----------------*/
function show(obj) {
    var td = document.getElementById("tblmenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "course-tab-active";
            document.getElementById(id).style.display = ""; //active
        }
        else {
            td[i].className = "course-tabs";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}

/*-------------------------------------*/
function shows(obj) {
    var td = document.getElementById("tblmenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "list-type-active";
            document.getElementById(id).style.display = ""; //active
        }
        else {
            td[i].className = "list-type";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}
/*----------------------------------------*/

function display(obj) {
    var td = document.getElementById("tblmenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "active-tab";
            document.getElementById(id).style.display = ""; //active
        }
        else {
            td[i].className = "inactive-tab";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}

function dis(obj) {
    if (changedTab != '0') {
        if (validateUpdateStatus()) {
            if (updateTab(changedTab)) {
                changeTab(obj);
            }
        }
        else {
            changedTab = '0';
            changeTab(obj);
        }
    }
    else {

        changeTab(obj);
    }
}

function changeTab(obj) {
    var td = document.getElementById("tblemenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "active-inner-tab";
            document.getElementById(id).style.display = ""; //active

        }
        else {
            td[i].className = "inactive-inner-tab";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}

function toggleTabsForLargScorecard(obj) {
    var td = document.getElementById("tblemenu_CourseCard").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "active-inner-tab";
            document.getElementById(id).style.display = ""; //active

        }
        else {
            td[i].className = "inactive-inner-tab";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}

function dissearch(obj) {
    var td = document.getElementById("tblsearch").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "active-inner-tab";
            document.getElementById(id).style.display = ""; //active
            document.getElementById('ctl00_maincontent_tabshdnfld').value = obj.id;
        }
        else {
            td[i].className = "inactive-inner-tab";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}


/*-----------------tabs end-----------------------*/
function showDiv(num) {
    for (var i = 1; i <= 6; i++) {
        document.getElementById('div_' + i).style.display = 'none';
    }
    document.getElementById('div_' + num).style.display = '';
}

function hideDiv(num) {
    for (var i = 1; i <= 6; i++) {
        document.getElementById('div_' + i).style.display = 'none';
    }
    document.getElementById('div_' + num).style.display = '';
}
/*--------Show login form Start---------------*/
function showlogin() {
    //document.getElementById('ctl00_login').onmouseout = closeLoginWindowOnMouseOut;
	jQuery.noConflict();
    
	if (document.getElementById("ctl00_invalidlogin") != null) {
		jQuery("div[id$='invalidlogin']").hide();
		//__doPostBack('lnktryagain', 'retryinvalidlogin');
	}
	
    document.getElementById("ctl00_popo").className = "login-pop";
    document.getElementById("ctl00_popo").style.display = "";
    //jQuery('#ctl00_popo > #ctl00$txtloginemail').css('border', '5px red solid');
    //alert(document.getElementById("ctl00$txtloginemail").innerHTML());
    jQuery("input[name$='txtloginemail']").val("");
    jQuery("input[name$='txtloginpassword']").val("");
    jQuery("input[name$='txtloginpwd']").val("");

    jQuery("input[name$='txtloginemail']").addClass("sign");
    jQuery("input[name$='txtloginpwd']").addClass("sign");
    
    jQuery("div[id$='innerlogin']").show();

    jQuery("input[name*='txtloginemail']").focus();
    document.getElementById('divLoginWindowBackground').style.display = "";
    document.getElementById('ctl00_maincontent_lblInvaildMsg').innerHTML = "";
    document.getElementById('ctl00_maincontent_lblErrorMsg').innerHTML = "";
}
function slowlogin() {
    setTimeout(showlogin, 1000);
}

function showLoginWindowOnMouseOver() {
    //jQuery("div[id$='ctl00_login']").show();
    document.getElementById('ctl00_maincontent_login').style.display = '';
    document.getElementById('ctl00_maincontent_login').onmouseout = closeLoginWindowOnMouseOut;
}

function activateCloseLoginMethod(element) {
    var activateClose = true;
    if (document.getElementById('ctl00_txtemail').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtconfirmemail').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtusername').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtfirstname').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtlastname').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtpassword').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_txtconfirmpwd').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_maincontent_txtloginemail').value != "")
        activateClose = false;
    if (document.getElementById('ctl00_maincontent_txtloginpwd').value != "")
        activateClose = false;
      

//    if (activateClose) {
        setTimeout(closelogin, 5000);
//    }
}

function closeLoginWindowOnMouseOut(e) {

    if (!e) var e = window.event;
    
    var tg = (window.event) ? e.srcElement : e.target;
    
    if (tg.id != ctl00_maincontent_login) return;
    
    var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;

    // To fix Story ID: 5465264 Error on home page in IE 8 START
    // if parentNode is not null then assign the relative tag
    if (reltg != null) {
        while (reltg != tg && reltg.nodeName != 'BODY') {
            if (reltg.parentNode != null) {
                reltg = reltg.parentNode
            }
        }
    }
    // To fix Story ID: 5465264 Error on home page in IE 8 END
    if (reltg == tg) return;
    
     setTimeout(closelogin, 5000);
   
}

function closelogin(event) {
	//hidden field hdnLogin and hidden field hdnLoginCount and hdnStaylogin checked
    if (document.getElementById('ctl00_maincontent_hdnLogin').value != "" || document.getElementById('ctl00_maincontent_hdnLogincount').value != "" || document.getElementById('ctl00_maincontent_hdnStaylogin').value != "") {
		document.getElementById('ctl00_maincontent_login').style.display = '';
	}
	else {

		document.getElementById('divLoginWindowBackground').style.display = "none";
		try {
			document.getElementById("ctl00_popo").className = "hide";
			document.getElementById("ctl00_popo").style.display = "none";
			document.getElementById("ctl00_maincontent_login").className = "log-in-box";
			document.getElementById("ctl00_signup").className = "log-in-box hide";
			document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "";
			document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "";
			document.getElementById('ctl00_maincontent_txtloginemail').value = "";


			document.getElementById('ctl00_txtemail').value = "";
			document.getElementById('ctl00_txtconfirmemail').value = "";
			document.getElementById('ctl00_txtusername').value = "";
			document.getElementById('ctl00_txtfirstname').value = "";
			document.getElementById('ctl00_txtlastname').value = "";
			document.getElementById('ctl00_txtpwd').value = "";
			document.getElementById('ctl00_txtpassword').value = "";
			document.getElementById('ctl00_txtcfmpwd').value = "";
			document.getElementById('ctl00_txtconfirmpwd').value = "";

			//document.getElementById('ctl00_txtloginpassword').value = "";
			//document.getElementById('ctl00_maincontent_txtloginemail').className = "sign";
			//document.getElementById("ctl00_txtloginpassword").className = "sign";
			//document.getElementById("ctl00_maincontent_txtloginpwd").className = "hide";
			//document.getElementById("ctl00_maincontent_txtloginpwd").value = "";

			/*************************************/
			// This code is for the sign-up form  //
			/*************************************/

			/***********************************/


			$find('MPEwelcomemsg').hide()
			if ($find('MPEmaterials') != null) {
				$find('MPEmaterials').hide()
			}
			if ($find('MPEeditor') != null) {
				$find('MPEeditor').hide()
			}
			if ($find('MPEschedule') != null) {
				$find('MPEschedule').hide()
			}
			if ($find('MPEcoursecard') != null) {
				$find('MPEcoursecard').hide()
			}
		}
		catch (ex) {
		}
	}
}
/*--------Show login form End---------------*/
/*---------View Description-----------------*/
function showDes() {
    document.getElementById("des").className = "view-description";
    document.getElementById("des").style.display = "";
}
function closeDes() {
    document.getElementById("des").className = "hide";
    document.getElementById("des").style.display = "none";
}
/*---------Invite Faculty-----------------*/
function showinvite() {
    document.getElementById("inv").className = "view-invite";
    document.getElementById("inv").style.display = "";
}
function closeinvite() {
    document.getElementById("inv").className = "hide";
    document.getElementById("inv").style.display = "none";
}
/*------------------------*/
function openpopup() {
    document.getElementById("popup").className = "pop-box-open";
}
function closepopup() {
    document.getElementById("popup").className = "pop-box-close";
}
/*--------------------*/
function showsignup() {
    showlogin();
    document.getElementById("ctl00_maincontent_login").className = "log-in-box hide";
    document.getElementById("ctl00_signup").className = "log-in-box";
    document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "";
    
    document.getElementById('ctl00_txtemail').value = "";
    //document.getElementById('ctl00_txtemail').className = "sign";
    document.getElementById('ctl00_txtusername').value = "";
    document.getElementById('ctl00_txtpassword').value = "";
    document.getElementById("ctl00_txtpassword").value = "";
    document.getElementById("ctl00_txtconfirmpwd").value = "";
    document.getElementById("ctl00_txtconfirmemail").value = "";
    document.getElementById("ctl00_txtfirstname").value = "";
    document.getElementById("ctl00_txtlastname").value = "";
    
    
    //document.getElementById('ctl00_txtusername').className = "sign";
    return false;
    try {
        document.getElementById('ctl00_txtemail').focus();
    } catch (ex) { }
}
function RaiseEvent(obj) {
    document.getElementById('hdncontrolid').value = obj.id;
    document.getElementById("ctl00_popo").className = "login-pop";
    return ValidateSignup();

}
function ValidateLogin() {

/*
    var flg = true;
    var regpwd = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    if (document.getElementById('ctl00_maincontent_txtloginemail').value == 'E-mail address (or member name)') {
        
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter a valid Email Address/Member name";
        document.getElementById("ctl00_maincontent_txtloginemail").focus();
        flg = false;
    }

    else if (document.getElementById("ctl00_maincontent_txtloginpwd").value == '') {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Please enter your Password";
        
        document.getElementById('ctl00_txtloginpassword').focus();
        flg = false;
    }
    else if ((document.getElementById("ctl00_maincontent_txtloginpwd").value).length < 5) {
        document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "You must specify a password of 6 or more characters.";
        document.getElementById("ctl00_maincontent_txtloginpwd").focus();
        flg = false;
    }
//    else if (!regpwd.test(document.getElementById("ctl00_maincontent_txtloginpwd").value)) {
//    document.getElementById("ctl00_maincontent_lblerrmsg").innerHTML = "Your password must contain at least a lower case letter, an upper case letter and a digit.";
//    document.getElementById("ctl00_maincontent_txtloginpwd").focus();
//        flg = false;
//    }

    return flg;
    */
}
function ValidateSignup() {
    
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var regpwd = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\.\&\#\*\+\-\_\=\!\~\}\{\`\?\/\'\;\:\\\"\[\]]/;
    var flg = true;

    if (document.getElementById('ctl00_txtemail').value.indexOf('..') >= 0 || document.getElementById('ctl00_txtemail').value.split('@').length > 2 || document.getElementById('ctl00_txtemail').value.indexOf('.@') >= 0 || document.getElementById('ctl00_txtemail').value.indexOf('@.') >= 0) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter a valid email address";
    	document.getElementById("ctl00_txtemail").focus();
    	flg = false;
    }
    else if (!reg.test(document.getElementById('ctl00_txtemail').value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter a valid email address";
    	document.getElementById("ctl00_txtemail").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtemail").value != document.getElementById("ctl00_txtconfirmemail").value) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Your email and confirm email entries do not match";
    	document.getElementById("ctl00_txtconfirmemail").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtfirstname").value == '' || document.getElementById("ctl00_txtfirstname").value == document.getElementById("ctl00_txtfirstname").getAttribute('label')) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter your first name";
    	document.getElementById("ctl00_txtfirstname").focus();
    	flg = false;
    }
    else if (illegalChars.test(document.getElementById("ctl00_txtfirstname").value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "First name contains illegal characters.\n";
    	document.getElementById("ctl00_txtfirstname").focus();
    	flg = false;
    }
   
    else if (illegalChars.test(document.getElementById("ctl00_txtlastname").value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Last name contains illegal characters.\n";
    	document.getElementById("ctl00_txtlastname").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtlastname").value == '' || document.getElementById("ctl00_txtlastname").value == document.getElementById("ctl00_txtlastname").getAttribute('label')) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter your last name";
    	document.getElementById("ctl00_txtlastname").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtpassword").value == '') {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter your password";
    	document.getElementById("ctl00_txtpassword").focus();
    	flg = false;
    }
    else if (illegalChars.test(document.getElementById("ctl00_txtpassword").value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Password contains illegal characters.\n";
    	document.getElementById("ctl00_txtpassword").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtconfirmpwd").value == '') {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Please enter your confirm password";
    	document.getElementById("ctl00_txtconfirmpwd").focus();
    	flg = false;
    }
    else if (illegalChars.test(document.getElementById("ctl00_txtconfirmpwd").value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Password contains illegal characters.\n";
    	document.getElementById("ctl00_txtconfirmpwd").focus();
    	flg = false;
    }
    else if ((document.getElementById("ctl00_txtpassword").value).length < 6 || (document.getElementById("ctl00_txtconfirmpwd").value).length < 6) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Your password must contain 6 or more characters.";
    	document.getElementById("ctl00_txtpassword").focus();
    	flg = false;
    }

    else if (!regpwd.test(document.getElementById("ctl00_txtpassword").value) || !regpwd.test(document.getElementById("ctl00_txtconfirmpwd").value)) {
    	document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Your password must contain at least a lower case letter, an upper case letter and a digit.";
    	document.getElementById("ctl00_txtpassword").focus();
    	flg = false;
    }
    else if (document.getElementById("ctl00_txtpassword").value != '' && document.getElementById("ctl00_txtconfirmpwd").value != '') {
    	if (document.getElementById("ctl00_txtpassword").value != document.getElementById("ctl00_txtconfirmpwd").value) {
    		document.getElementById("ctl00_lblsignuperrmsg").innerHTML = "Your password and confirm password entires do not match";
    		document.getElementById("ctl00_txtpassword").focus();
    		flg = false;
    	}
    }
    return flg;
}

function ValidateChangePwd() {

    
    var flg = true;
    var reg  = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;

    if (!reg.test(document.getElementById("ctl00_maincontent_txtnewpwd").value) || !reg.test(document.getElementById("ctl00_maincontent_txtchpwd").value)) {
        document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "Your password must contain at least one of each of the following: lower case letter, upper case letter, and digit.";
        document.getElementById("ctl00_maincontent_txtnewpwd").focus();
        flg = false;
    }
    else if (document.getElementById("ctl00_maincontent_txtnewpwd").value == '') {
        document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "Please enter your New Password";
        document.getElementById("ctl00_maincontent_txtnewpwd").focus();
        flg = false;
    }
    else if (document.getElementById("ctl00_maincontent_txtchpwd").value == '') {
        document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "Please retype your password in the Confirm Password box";
        document.getElementById("ctl00_maincontent_txtchpwd").focus();
        flg = false;
    }
    else if ((document.getElementById("ctl00_maincontent_txtchpwd").value)!= (document.getElementById("ctl00_maincontent_txtnewpwd").value)) {
        document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "Your Password and Confirm Password do not match";
        document.getElementById("ctl00_maincontent_txtnewpwd").focus();
        flg = false;
    }
    else if ((document.getElementById("ctl00_maincontent_txtnewpwd").value).length < 6 || (document.getElementById("ctl00_maincontent_txtchpwd").value).length < 6) {
    document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "You must specify a password of 6 or more characters";
        
        flg = false;
    }
    
    return flg;
}
function ClearChangePwd() {


    document.getElementById("ctl00_maincontent_txtnewpwd").value = '';
    document.getElementById("ctl00_maincontent_txtnewpwd").focus();
    document.getElementById("ctl00_maincontent_txtchpwd").value = '';
    document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = '';
    return false;
}
function ValidateForgotPwd(pwdBoxId) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var flg = true;
    if (!reg.test(document.getElementById('ctl00_maincontent_txtforgotemail').value)) {

        document.getElementById("ctl00_maincontent_lblerrormsg").innerHTML = "Please enter a valid Email Address";
        document.getElementById("ctl00_maincontent_txtforgotemail").focus();
        flg = false;
    }
    return flg;
 }

//Mouuse out functionality for login Box
function init() {
    var theList = document.getElementById('divcloselg');
    xb.addEvent(theList, 'mouseenter', enter, false);
    xb.addEvent(theList, 'mouseleave', leave, false);
}

function enter(e) {

}
function leave(e) {
    closelogin();
}
var xb =
{
    evtHash: [],

    ieGetUniqueID: function(_elem) {
        if (_elem === window) { return 'theWindow'; }
        else if (_elem === document) { return 'theDocument'; }
        else { return _elem.uniqueID; }
    },

    addEvent: function(_elem, _evtName, _fn, _useCapture) {
        if (typeof _elem.addEventListener != 'undefined') {
            if (_evtName == 'mouseenter')
            { _elem.addEventListener('mouseover', xb.mouseEnter(_fn), _useCapture); }
            else if (_evtName == 'mouseleave')
            { _elem.addEventListener('mouseout', xb.mouseEnter(_fn), _useCapture); }
            else
            { _elem.addEventListener(_evtName, _fn, _useCapture); }
        }
        else if (typeof _elem.attachEvent != 'undefined') {
            var key = '{FNKEY::obj_' + xb.ieGetUniqueID(_elem) + '::evt_' + _evtName + '::fn_' + _fn + '}';
            var f = xb.evtHash[key];
            if (typeof f != 'undefined')
            { return; }

            f = function() {
                _fn.call(_elem);
            };

            xb.evtHash[key] = f;
            _elem.attachEvent('on' + _evtName, f);

            // attach unload event to the window to clean up possibly IE memory leaks
            window.attachEvent('onunload', function() {
                _elem.detachEvent('on' + _evtName, f);
            });

            key = null;
            //f = null; /* DON'T null this out, or we won't be able to detach it */
        }
        else
        { _elem['on' + _evtName] = _fn; }
    },

    removeEvent: function(_elem, _evtName, _fn, _useCapture) {
        if (typeof _elem.removeEventListener != 'undefined')
        { _elem.removeEventListener(_evtName, _fn, _useCapture); }
        else if (typeof _elem.detachEvent != 'undefined') {
            var key = '{FNKEY::obj_' + xb.ieGetUniqueID(_elem) + '::evt' + _evtName + '::fn_' + _fn + '}';
            var f = xb.evtHash[key];
            if (typeof f != 'undefined') {
                _elem.detachEvent('on' + _evtName, f);
                delete xb.evtHash[key];
            }

            key = null;
            //f = null; /* DON'T null this out, or we won't be able to detach it */
        }
    },

    mouseEnter: function(_pFn) {
        return function(_evt) {
            var relTarget = _evt.relatedTarget;
            if (this == relTarget || xb.isAChildOf(this, relTarget))
            { return; }

            _pFn.call(this, _evt);
        }
    },

    isAChildOf: function(_parent, _child) {
        if (_parent == _child) { return false };

        while (_child && _child != _parent) {
            _child = _child.parentNode
        }

        return _child == _parent;
    }
};

// ------------------------------------- surendra --------------------------------

var errorElement = null;

function ValidateUserProfile() {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var msg = "";

    if (document.getElementById("ctl00_maincontent_txtEmailAddress").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtEmailAddress";
        msg = "<li>Please enter email address </li>"+ msg;
//        if (document.getElementById("ctl00_maincontent_txtReEnterEmailAddress").value.replace(" ", "") == "") {
//            errorElement = "ctl00_maincontent_txtReEnterEmailAddress";
//            msg = "<li>Please re-enter email address </li>" + msg;
//        }
    }
    else {
//        if (document.getElementById("ctl00_maincontent_txtReEnterEmailAddress").value.replace(" ", "") == "") {
//            errorElement = "ctl00_maincontent_txtReEnterEmailAddress";
//            msg = "<li>Please enter re-enter email address </li>" + msg;
//        }
        if (!reg.test(document.getElementById("ctl00_maincontent_txtEmailAddress").value.replace(" ", ""))) {
            errorElement = "ctl00_maincontent_txtEmailAddress";
            msg = "<li>Please enter valid email address </li>" + msg;
        }
//        if (document.getElementById("ctl00_maincontent_txtEmailAddress").value.replace(" ", "") != document.getElementById("ctl00_maincontent_txtReEnterEmailAddress").value.replace(" ", "")) {
//            errorElement = "ctl00_maincontent_txtEmailAddress";
//            msg = "<li>Email addresses do not match </li>" + msg;
//        }
    }
    
    if (document.getElementById("ctl00_maincontent_ddlCountry").value.replace(" ", "") == "-1") {
        errorElement = "ctl00_maincontent_ddlCountry";
        msg = "<li>Please select Country </li>" + msg;
    }
    
    if (document.getElementById("ctl00_maincontent_txtPostalCode").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtPostalCode";
        msg = "<li>Please enter ZIP/Postal Code </li>" + msg;
    }
    
    var elRegion = document.getElementById("ctl00_maincontent_ddlRegion");
    if (elRegion != null && elRegion.value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_ddlRegion";
        msg = "<li>Please select State/Province </li>" + msg;
    }
    
    if (document.getElementById("ctl00_maincontent_txtCity").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtCity";
        msg = "<li>Please enter City </li>";
    }
    
    if (document.getElementById("ctl00_maincontent_txtAddress1").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtAddress1";
        msg = "<li>Please enter Address </li>" + msg;
    }
    
    if (document.getElementById("ctl00_maincontent_chkUseSiteAlias").checked && document.getElementById("ctl00_maincontent_txtSiteAlias").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_chkUseSiteAlias";
        msg = "<li>Please enter Site Alias or uncheck Use Site Alias checkbox </li>" + msg;
    }
    
    if (document.getElementById("ctl00_maincontent_txtLastName").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtLastName";
        msg = "<li>Please enter Last Name </li>" + msg;
    }
    if (document.getElementById("ctl00_maincontent_txtFirstName").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtFirstName";
        msg = "<li>Please enter First Name</li>" + msg;
    }  
     
    //if (document.getElementById("ctl00_maincontent_txtMemberName").value.replace(" ", "") == "") {
    //  errorElement = "ctl00_maincontent_txtMemberName";
    //  msg = "<li>Please enter Member Name </li>" + msg;
    //  }
    // else {
    // if (document.getElementById("ctl00_maincontent_txtMemberName").value.indexOf(" ") > -1) {
    //      errorElement = "ctl00_maincontent_txtMemberName";
    //      msg = "<li>Space(s) are not allowed in Member Name </li>" + msg;
    // }
    //}
    
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEexistsMember').show();
        return false;
    }
    else
        return true;
}

function fnPasswordValidations() {
    var regpwd = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/;
    var msg = "";
    if (document.getElementById("ctl00_maincontent_txtPassword").value.replace(" ", "") == "") {
        msg += "please enter Password \n";
        if (document.getElementById("ctl00_maincontent_txtConfirmPassword").value.replace(" ", "") == "") {
            msg += "please enter Confirm Password \n";
        }
    }
    else {
        if (document.getElementById("ctl00_maincontent_txtConfirmPassword").value.replace(" ", "") == "") {
            msg += "please enter Confirm Password \n";
        }
        if (document.getElementById("ctl00_maincontent_txtPassword").value.replace(" ", "").length < 6) {
            msg += "please enter at least 6 characters for password \n";
        }
        else {
            if (!regpwd.test(document.getElementById("ctl00_maincontent_txtPassword").value.replace(" ", ""))) {
                msg += "Your password must contain at least a lower case letter, an upper case letter and a digit. \n";
            }
            else {
                if (document.getElementById("ctl00_maincontent_txtPassword").value.replace(" ", "") != document.getElementById("ctl00_maincontent_txtConfirmPassword").value.replace(" ", "")) {
                    msg += "Password mismatched \n";
                }
            }
        }
            
        }
    


    if (msg.replace(" ","").length > 0) {
        alert(msg);
        return false;
    }
    else {
        return true;
    }


}

//------------------------------------------------------------------------------------



function CollapsePanel(fromid, behaviour0ID, behaviour1ID, behaviour2ID, behaviour3ID, behaviour4ID) {
    try {
        document.getElementById("sign" + fromid).className = "course-wrapper";
        document.getElementById("sign" + behaviour0ID).className = "course-wrap";
        document.getElementById("sign" + behaviour1ID).className = "course-wrap";
        document.getElementById("sign" + behaviour2ID).className = "course-wrap";
        document.getElementById("sign" + behaviour3ID).className = "course-wrap";
        document.getElementById("sign" + behaviour4ID).className = "course-wrap";
        $find(behaviour0ID).collapsePanel();
        $find(behaviour1ID).collapsePanel();
        $find(behaviour2ID).collapsePanel();
        $find(behaviour3ID).collapsePanel();
        $find(behaviour4ID).collapsePanel();
    }
    catch (e) { }

}
/*---------Find Materials-----------------*/
function showMat() {
    document.getElementById("mat").className = "find-courses";
    document.getElementById("mat").style.display = "";
}
function closeMat() {
    document.getElementById("mat").className = "hide";
    document.getElementById("mat").style.display = "none";
}
/*---------Invite Faculty-----------------*/
function showinvite() {
    document.getElementById("inv").className = "view-invite";
    document.getElementById("inv").style.display = "";
}
function closeinvite() {
    document.getElementById("inv").className = "hide";
    document.getElementById("inv").style.display = "none";
}
/*------------------------*/
/*---------Find Courses-----------------*/


function showPrerequisiteCou() {
    //document.getElementById("ctl00_maincontent_divcou").className = "find-courses";
    //document.getElementById("ctl00_maincontent_divcou").style.display = "";
    document.getElementById("ctl00_maincontent_hdnrecommneded").value = "1";
    return false;
}
function showRecommendedCou() {
    //document.getElementById("ctl00_maincontent_divcou").className = "find-courses";
    //document.getElementById("ctl00_maincontent_divcou").style.display = "";
    document.getElementById("ctl00_maincontent_hdnrecommneded").value = "2";
    return false;
}


function closeCou() {
    document.getElementById("ctl00_maincontent_divcou").className = "hide";
    document.getElementById("ctl00_maincontent_divcou").style.display = "none";
    return false;
}
/*starting Trimming Leading and trailing white space */
function TrimSpace(obj) {
    obj.value = alltrim(obj.value);
} 
function ltrim(str) {
    return str.replace(/^\s+/, '');
}
function rtrim(str) {
    return str.replace(/\s+$/, '');
}
function alltrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}
/*ending Trimming Leading and trailing white space */

var errorElementCourse = null;
function ValidateCourse() {
    designPanel.onContentChanged();
    var msg = "";
    //richTextEditorContentCount = editPanel._contentElement.value.length;
    if (richTextEditorContentCount == 0) {
        msg = "<li>Please enter long description</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txtlongdesc";
    }
    if (document.getElementById("ctl00_maincontent_txtshortdesc").value == '') {
        msg = "<li>Please enter short description</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txtshortdesc";
    }
    if (document.getElementById("ctl00_maincontent_txtcoursename").value == '') {
        msg = "<li>Please enter course title</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txtcoursename";
    }    
    if (document.getElementById("ctl00_maincontent_DDLCategory").value == '0') {
        msg = "<li>Please select Category</li>" + msg;
        errorElementCourse = "ctl00_maincontent_DDLCategory";
    }
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }

   }

 function ValidateUploadedCourse() {
   designPanel.onContentChanged();
   var msg = "";
   	if (document.getElementById('ctl00_maincontent_ddloptions').value == "Self-paced") {
   		if (document.getElementById('ctl00_maincontent_trUploadedFile').style.dispaly == 'none' || document.getElementById('ctl00_maincontent_trUploadedFile').style.display == "none") {   		
   			msg = "<li>Before publishing this course, you must first upload course content on Step 2.</li>" + msg;
   		}
   	}
   	if (document.getElementById('ctl00_maincontent_ddloptions').value == "Classroom/Seminar") {
   		if (document.getElementById('ctl00_maincontent_trGridCount').value == "0" || document.getElementById('ctl00_maincontent_trGridCount').value == '') {
   			msg = "<li>Before publishing this course, you must add at least one scheduled session on the Overview tab of Step 3,\" Course Details.\"</li>" + msg;
   		}
   	}

   	if (document.getElementById('ctl00_maincontent_ddloptions').value == "Podcast") {
   		if (document.getElementById('ctl00_maincontent_trUploadedFile').style.dispaly == 'none' || document.getElementById('ctl00_maincontent_trUploadedFile').style.display == "none") {
   			msg = "<li>Before publishing this course, you must first upload course content on Step 2." + msg;
   		}
   	}
   	//richTextEditorContentCount = editPanel._contentElement.value.length;

   	if (msg.replace(" ", "").length > 0) {
   		document.getElementById("ctl00_maincontent_lblschedulemsg").innerHTML = "";
   		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
   		$find('MPEErrorMessage').show();
   		return false;
   	}
   	else {
   		return true;
   	}
  
   }
   function Clearselection()
   {
   	$find('MPEschedule').hide();
   	document.getElementById("ctl00_maincontent_txtscheduledate").value = "";
   	document.getElementById("ctl00_maincontent_lblschedulemsg").value="";
   	document.getElementById("ctl00_maincontent_txtscheduledate").value="";
   	document.getElementById("ctl00_maincontent_ddlScheduleTimeHours").value="01";
   	document.getElementById("ctl00_maincontent_ddlScheduleTimeMin").value="00";
   	document.getElementById("ctl00_maincontent_ddlamorpm").value=1;
   	document.getElementById("ctl00_maincontent_ddltimeformat").value =0;
   	document.getElementById("ctl00_maincontent_txtlocation").value="";
   	return false;
   	}
function stripHTML(stringToStrip) {
    var re = /<\S[^><]*>/g;
       return value.replace(re, "");
}

function openeditorpopup() {
    $find('MPEeditor').show();
    document.getElementById("ctl00_maincontent_txteditoremail").value = "";
    return false; 
}
function ValidateEditor() {
    if (trim(document.getElementById("ctl00_maincontent_txteditoremail").value) == '') {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter at least one email address </ul>";
        $find('MPErrorMessage').show();
        return false;
    }
    var emailAddresses = document.getElementById("ctl00_maincontent_txteditoremail").value.split(',');
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    for (var i = 0; i < emailAddresses.length; i++) {
        
        if (!reg.test(trim(emailAddresses[i]))) {
            document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> The email address(es) must be in the correct form (e.g., name@site.com) </ul>";
            $find('MPErrorMessage').show();
            document.getElementById("ctl00_maincontent_txteditoremail").focus();
            return false;
        }
    }

}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, "");
}

function ValidateObjective() {

    if (document.getElementById("ctl00_maincontent_txtobjectives").value=='') {
        document.getElementById("ctl00_maincontent_lblobjmsg").innerHTML = "Please enter Objective";
        document.getElementById("ctl00_maincontent_txtobjectives").focus();
        return false;
    }
}
function ValidateTerms() {
    var msg = "";
    
    if (document.getElementById("ctl00_maincontent_txttermdescription").value == 'Type or paste definition here') {
        msg = "<li>Please enter Description</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txttermdescription";
    }
    if (document.getElementById("ctl00_maincontent_txtterm").value == 'Type term here') {
        msg = "<li>Please enter Term</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txtterm";
    }
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }
}



function ValidateMaterials() {

    if (document.getElementById("ctl00_maincontent_hdnUploadedCourseMaterialId").value == '') {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please select a file to upload. </ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else if(trim(document.getElementById("ctl00_maincontent_txtaddmatdescription").value) == ''){
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter description. </ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    return true;
}

function openmaterialpopup() {
    document.getElementById("spanUploadedCourseMaterialName").innerHTML = "";
    document.getElementById("ctl00_maincontent_hdnUploadedCourseMaterialId").value = ''
    document.getElementById("ctl00_maincontent_hdnUploadedCourseMaterialName").value = ''
    document.getElementById("ctl00_maincontent_lbladdmaterrormsg").innerHTML = "";
    document.getElementById("ctl00_maincontent_txtaddmatdescription").value = "";
    document.getElementById("spanUploadedCourseMaterialName").innerHTML = "";
    document.getElementById("ctl00_maincontent_ddlmatfiletype").selectedIndex = 0;
    //$find('MPEmaterials').show();
    return true;
   }


   function ValidateSchedule() {
   	if(document.getElementById("ctl00_maincontent_txtscheduledate").value=='' || document.getElementById("ctl00_maincontent_txtscheduledate").value==null)
   	{
   		document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>Please select valid Date. </ul>";
   		document.getElementById("ctl00_maincontent_lblschedulemsg").value = "";
   	 $find('MPEErrorMessage').show();
        return false;
   	}
 if (document.getElementById("ctl00_maincontent_txtlocation").value==''|| document.getElementById("ctl00_maincontent_txtlocation").value==null) {
 	document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>Please provide valid Location </ul>";
 	document.getElementById("ctl00_maincontent_lblschedulemsg").value = "";
        $find('MPEErrorMessage').show();
        return false;
       }
       return true;
   }

function checkTimeFormat() {
var re = /(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)[:](0|1|2|3|4|5)\d{1}/;
if (!re.test(document.getElementById("ctl00_maincontent_txttime").value))
    {
       return false ;
    }
    else {
       return true;
    }
}

function openschedulepopup() {
	document.getElementById("ctl00_maincontent_lblschedulemsg").innerHTML = "";
    $find('MPEschedule').show()
//    document.getElementById("ctl00_maincontent_lblschedulemsg").innerHTML = "";
//    document.getElementById("ctl00_maincontent_txtscheduledate").value = "";
//    document.getElementById("ctl00_maincontent_txttime").value = "";
    document.getElementById("ctl00_maincontent_txtwebadress").value = document.getElementById("ctl00_maincontent_hdnwebaddr").value;
    document.getElementById("ctl00_maincontent_traddschedule").style.display = "block";
    document.getElementById("ctl00_maincontent_trgrid").style.display = "block";
    return false;
}

function HideScheduleGrid() {
    document.getElementById("ctl00_maincontent_traddschedule").style.display = "block";
    document.getElementById("ctl00_maincontent_trgrid").style.display = "none";
    return false;
}
function ShowScheduleGrid() {

    document.getElementById("ctl00_maincontent_traddschedule").style.display = "none";
    document.getElementById("ctl00_maincontent_trgrid").style.display = "block";
    document.getElementById("ctl00_maincontent_lblschedulemsg").innerHTML = "";
    document.getElementById("ctl00_maincontent_txtscheduledate").value = "";
    document.getElementById("ctl00_maincontent_txttime").value = "";
    document.getElementById("ctl00_maincontent_txtwebadress").value = "";
    
    return false;
}
function OpenCourseCard() {
    $find('MPEcoursecard').show()
    return false;
}
function ValidateImageupload() {
    if (document.getElementById("ctl00_maincontent_flUpImage").value.replace(" ", "") == "")
        {
        alert("please upload a image");
        return false;
        }
        else
        {
        return true;
        }    
}
function ignore_enter_key() {
    alert('test');
    var iKey;
    
    var eAny_Event = window.event;

    iKey = eAny_Event.keyCode;

    if (iKey != 13) {
        return true;
    }
    else {
        return false;
    }
}
var errorElementProfile = null;
function ValidateTrainerProfile() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var msg = "";
    if(document.getElementById("ctl00_maincontent_txtEmailAddress").value !="") {
        if (!reg.test(document.getElementById("ctl00_maincontent_txtEmailAddress").value.replace(" ", ""))) {
            msg = "<li>Enter valid Email Address</li>" + msg;
            errorElementProfile = "ctl00_maincontent_txtEmailAddress";
        }
    }
    if (document.getElementById("ctl00_maincontent_txtEmailAddress").value.replace(" ", "") == "") {
        msg = "<li>Please enter Email address</li>" + msg;
        errorElementProfile = "ctl00_maincontent_txtEmailAddress";
    }
    
    /*if (document.getElementById("ctl00_maincontent_chkOne").checked) {
        if (document.getElementById("ctl00_maincontent_txtBio").value.replace(" ", "") == "") {
            msg = "<li>Please enter Bio-Data </li>" + msg;
            errorElementProfile = "ctl00_maincontent_txtBio";
        }
    }
    */
    if (document.getElementById("ctl00_maincontent_txtFirstName").value.replace(" ", "") == "") {
        msg = "<li>Please enter First name</li>" + msg;
        errorElementProfile = "ctl00_maincontent_txtFirstName";
    }
    if (document.getElementById("ctl00_maincontent_txtLastName").value.replace(" ", "") == "") {
        msg = "<li>Please enter Last name</li>" + msg;
        errorElementProfile = "ctl00_maincontent_txtLastName";
    }
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }

}

function ValidateCourseOverTab() {

    var num = /^[0-9]+$/;
    var dec = /^([0-9])+\.([0-9])+$/;
    var msg = "";
    
    if (document.getElementById('ctl00_maincontent_ddlsubject').value == "-1") {
    	msg = "<li>Please select Main Subject for this course, or \"General\" for general purpose courses</li>" + msg;
    	errorElementCourse = "ctl00_maincontent_ddlsubject";
    }

    if (document.getElementById('ctl00_maincontent_ddlmainindustry').value == "-1") {
    	msg = "<li>Please select Main Industry for this course, or \"All\" for general purpose courses</li>" + msg;
    	errorElementCourse = "ctl00_maincontent_ddlmainindustry";
    }
    if (document.getElementById('ctl00_maincontent_ddlTrainerName').value == -1) {
    	msg = "<li>Please select Trainer for this course</li>" + msg;
    	errorElementCourse = "ctl00_maincontent_ddlTrainerName";
    }
    if (document.getElementById('ctl00_maincontent_ddlaccess').value == -1) {
    	msg = "<li>Please select Access preference (Public, which all users can see, or Private, which is restricted to invited users)</li>" + msg;
    	errorElementCourse = "ctl00_maincontent_ddlaccess";
    }
    if (!dec.test(document.getElementById('ctl00_maincontent_txtcost').value) && 
        !num.test(document.getElementById("ctl00_maincontent_txtcost").value)) {
        msg = "<li>Please enter valid Cost in U.S. dollars, including up to two places after the decimal, or \"0\" for free courses</li>" + msg;
        errorElementCourse = "ctl00_maincontent_txtcost";
       }
       if (document.getElementById('ctl00_maincontent_lstDurationHours').value == "0" &&
        document.getElementById('ctl00_maincontent_lstDurationMinutes').value == "0") {
       	msg = "<li>Please select some Duration for this course</li>" + msg;
       	//errorElementCourse = "ctl00_maincontent_lstDurationHours";
       }   
    if (document.getElementById('ctl00_maincontent_radioTimeLimit').checked) {
        if (trim(document.getElementById('ctl00_maincontent_txtTimeLimit').value) != parseInt(trim(document.getElementById('ctl00_maincontent_txtTimeLimit').value))) {
            msg = "<li>Please enter a valid time limit</li>" + msg;
        }
    }
    if (document.getElementById('ctl00_maincontent_radioViewLimit').checked) {
        if (trim(document.getElementById('ctl00_maincontent_txtViewLimit').value) != parseInt(trim(document.getElementById('ctl00_maincontent_txtViewLimit').value))) {
            msg = "<li>Please enter a valid view limit</li>" + msg;
        }
    }
//    if (document.getElementById('ctl00_maincontent_lcimagefilename').innerHTML == "") {
//        msg = "<li>Please upload course content on Step 2</li>" + msg;
//    }

    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }

}
function validateCourseEditor() {
    if (document.getElementById('ctl00_maincontent_ddleditors').value == "-1") {
        errorElementCourse = "ctl00_maincontent_ddleditors";
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please select any one Course Editor </ul>";
        $find('MPEErrorMessage').show();
        return false;
    }
    else {
        return true;
    }
}
function validateText(t1) {
    var check = "\"[a-zA-Z0-9\s*]*?\""
    var temp = "\"" + t1.value + "\"";
    var match = temp.match(check);
    if (match == null) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Only Alphanumeric and white space allowed. </ul>";
        $find('MPErrorMessage').show();
        return false;
    }

}

function ValidateCost() {
    var dec = /^([0-9])+\.([0-9])+$/;
    var num = /^[0-9]+$/;
    var flg = true;
    if (document.getElementById('ctl00_maincontent_txtcost').value != "") {
        if (!dec.test(document.getElementById('ctl00_maincontent_txtcost').value) && !num.test(document.getElementById('ctl00_maincontent_txtcost').value)) {
            errorElementCourse = "ctl00_maincontent_txtcost";
            document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> Please enter valid Cost </ul>";
            $find('MPErrorMessage').show();
            flg = false;
        }
    }
    enableUpdate('1');
    return flg;
}
function fnTrainerProfileBiolimiter(obj) {
    var count = 350;
    var tex = obj.value;
    var len = tex.length;   
    
    if (len >= count) {
        tex = tex.substring(0, count);
        document.getElementById('lblBioCharactersRemaining').style.color = 'red';
        document.getElementById('lblBioCharactersRemaining').innerHTML = "0 characters remaining.";
        obj.value = tex;
        return false;
    }
    else {
        document.getElementById('lblBioCharactersRemaining').innerHTML = count - len + " characters remaining.";
        document.getElementById('lblBioCharactersRemaining').style.color = '#333333';
    }
}
function CloseSessionEnd() {
    document.getElementById('ctl00_divlogin').style.display = 'block';
    document.getElementById('ctl00_popo').className = "login-pop";

    document.getElementById('ctl00_maincontent_login').className = "log-in-box";
    document.getElementById('ctl00_signup').className = "log-in-box hide";

    document.getElementById('ctl00_maincontent_txtloginemail').focus();
    $find('MPESessionend').hide()
}
function openReschedulepopup() {

    $find('MPEReschedule').show()

}

function closeReschedulepopup() {
    $find('MPEReschedule').hide()
    return false;
}

function openDescpopup() {

    $find('MPEDescription').show()

}

function closeDescpopup() {
    $find('MPEDescription').hide()
    return false;
}
/*---added for learn self paced page on 20-april-10----------*/
function tabs(obj) {
    var td = document.getElementById("tblemenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "internal-active";
            document.getElementById(id).style.display = ""; //active
            document.getElementById(id).className = "bottom-block";
        }
        else {
            td[i].className = "internal";
            document.getElementById(id).style.display = "none"; //inactive
            document.getElementById(id).className = "bottom-block hide";
        }
    }
}
/*-------------------------------end----------------------------*/

/*---added for learn self paced page on 20-april-10----------*/
function addedtabs(obj) {
    var td = document.getElementById("menutble").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "internal-active";
            document.getElementById(id).style.display = ""; //active
            document.getElementById(id).className = "bottom-block";
        }
        else {
            td[i].className = "internal";
            document.getElementById(id).style.display = "none"; //inactive
            document.getElementById(id).className = "bottom-block hide";
        }
    }
}
/*-------------------------------end----------------------------*/

function FnManageTabs() {
    var image = document.getElementById("imgtabs").src.substring(document.getElementById("imgtabs").src.lastIndexOf('/'));

    if (image == '/icon-collapse-tab.gif') {
        document.getElementById("imgtabs").src = '../images/phobosweb/icon-expand-tab.gif';
        document.getElementById("tbl1").style.display = "none";
        document.getElementById("tbl1").className = "bottom-block hide";
        document.getElementById("tbl2").style.display = "none";
        document.getElementById("tbl3").style.display = "none";
        document.getElementById("tbl4").style.display = "none";
        document.getElementById("td1").className = "internal";
        document.getElementById("td2").className = "internal";
        document.getElementById("td3").className = "internal";
        document.getElementById("td4").className = "internal";
        document.getElementById("tblemenu").style.display = "none";

    } else {
        document.getElementById("imgtabs").src = '../images/phobosweb/icon-collapse-tab.gif';
        document.getElementById("tbl1").style.display = "";
        document.getElementById("tbl1").className = "bottom-block show";
        document.getElementById("td1").className = "internal-active";
        document.getElementById("td2").className = "internal";
        document.getElementById("td3").className = "internal";
        document.getElementById("td4").className = "internal";
        document.getElementById("tblemenu").style.display = "";
    }

}

function FnManageAddedTabs() {
    var image = document.getElementById("imgaddedtabs").src.substring(document.getElementById("imgaddedtabs").src.lastIndexOf('/'));

    if (image == '/icon-collapse-tab.gif') {
        document.getElementById("imgaddedtabs").src = '../images/phobosweb/icon-expand-tab.gif';
        document.getElementById("tbl5").style.display = "none";
        document.getElementById("tbl6").style.display = "none";
        document.getElementById("tbl7").style.display = "none";
        document.getElementById("tbl8").style.display = "none";
        document.getElementById("td5").className = "internal";
        document.getElementById("td6").className = "internal";
        document.getElementById("td7").className = "internal";
        document.getElementById("td8").className = "internal";
        document.getElementById("menutble").style.display = "none";
        document.getElementById("menutble").className = "tabs hide";

    } else {
        document.getElementById("imgaddedtabs").src = '../images/phobosweb/icon-collapse-tab.gif';
        document.getElementById("tbl5").style.display = "";
        document.getElementById("tbl5").className = "bottom-block";
        document.getElementById("td5").className = "internal-active";
        document.getElementById("td6").className = "internal";
        document.getElementById("td7").className = "internal";
        document.getElementById("td8").className = "internal";
        document.getElementById("menutble").style.display = "";
        document.getElementById("menutble").className = "tabs";
    }

}

function fncommentcheck() {
    var flg = true;
    if (document.getElementById("ctl00_maincontent_txtcomment").value == "") {
        document.getElementById("ctl00_maincontent_lblmsg").innerHTML = "Please enter Comment";
        flg = false;
    }
    
    return flg;
}


function ValidateEmailMsg() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var msg = "";
    var flg = true;

    if (document.getElementById("ctl00_maincontent_txtto").value.replace(" ", "") == "" || document.getElementById("ctl00_maincontent_txtcc").value.replace(" ", "") == "" || document.getElementById("ctl00_maincontent_txtbcc").value.replace(" ", "") == "") {
        flg = false;
        alert("There must be at least one name or distribution list in the To,Cc,Bcc box.");

    }
    return flg;
}
function closeemailpopup() {
    $find('MPEemail').hide()
    return false;
}
//function RefreshInbox() {
//    document.getElementById("ctl00_maincontent_btninbox").click();
//}

function RefreshInbox() {
    document.getElementById("ctl00_maincontent_btninbox").click();
}
function RefreshSent() {
    document.getElementById("ctl00_maincontent_btnsent").click();
}
function RefreshDraft() {
    document.getElementById("ctl00_maincontent_btndraft").click();
}
function ClearAll(gridid) {
    var gridname = 'ctl00_maincontent_' + gridid;
    var checkboxes = document.getElementById(gridname).getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
            checkboxes[i].checked = false;
        }
    }
}
function SelectAll(gridid) {

    var gridname = 'ctl00_maincontent_' + gridid;
    var checkboxes = document.getElementById(gridname).getElementsByTagName('input');
       for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == "checkbox") {
                checkboxes[i].checked = true;
            }
        }
        //alert(checkboxes.length);
        document.getElementById('ctl00_maincontent_hdnCheckboxCount').value=checkboxes.length
}
function openattachmentpopup() {
	document.getElementById('ctl00_maincontent_divattachment').className = 'show';
	//document.getElementById('ctl00_maincontent_fuattachment').value = '';
	var who = document.getElementById('ctl00_maincontent_fuattachment');
	var who2 = who.cloneNode(false);
	//who2.onchange = who.onchange;
	who.parentNode.replaceChild(who2, who); 
	$("#ctl00_maincontent_fuattachment").val("");
    $find('MPEAttachment').show();
    return false;
   }
  
function ValidateContactUs() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var flg = true;
    if (document.getElementById('ctl00_maincontent_txtname').value == '') {
    	//document.getElementById("ctl00_maincontent_lblmsg").innerHTML = "Please enter valid Name";
    	document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul>  Please enter valid Name </ul>";
        $find('MPEErrorMessage').show();
        document.getElementById("ctl00_maincontent_txtname").focus();
        return false;
    }
//    else if (!reg.test(document.getElementById('ctl00_maincontent_txtmail').value)) {
//     // document.getElementById("ctl00_maincontent_lblmsg").innerHTML = "Please enter valid Email";
//    document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul>  Please enter valid Email </ul>";
//    $find('MPEErrorMessage').show();
//        document.getElementById("ctl00_maincontent_txtmail").focus();
//        return false;
    //    }
    var mailids = document.getElementById('ctl00_maincontent_txtmail').value;

	if ((mailids == ' ') ||(mailids == null)) {
		//document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Please enter emailID(s)";
		document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul> Please enter valid Email</ul>";
		$find('MPEErrorMessage').show();
		//document.getElementById("ctl00_maincontent_txtinvite").focus();
		return false;
	}
var arr = new Array(
'.com', '.net', '.org', '.biz', '.coop', '.info', '.museum', '.name', '.pro',
'.edu', '.gov', '.int', '.mil', '.ac', '.ad', '.ae', '.af', '.ag', '.ai', '.al',
'.am', '.an', '.ao', '.aq', '.ar', '.as', '.at', '.au', '.aw', '.az', '.ba', '.bb',
'.bd', '.be', '.bf', '.bg', '.bh', '.bi', '.bj', '.bm', '.bn', '.bo', '.br', '.bs',
'.bt', '.bv', '.bw', '.by', '.bz', '.ca', '.cc', '.cd', '.cf', '.cg', '.ch', '.ci',
'.ck', '.cl', '.cm', '.cn', '.co', '.cr', '.cu', '.cv', '.cx', '.cy', '.cz', '.de',
'.dj', '.dk', '.dm', '.do', '.dz', '.ec', '.ee', '.eg', '.eh', '.er', '.es', '.et',
'.fi', '.fj', '.fk', '.fm', '.fo', '.fr', '.ga', '.gd', '.ge', '.gf', '.gg', '.gh',
'.gi', '.gl', '.gm', '.gn', '.gp', '.gq', '.gr', '.gs', '.gt', '.gu', '.gv', '.gy',
'.hk', '.hm', '.hn', '.hr', '.ht', '.hu', '.id', '.ie', '.il', '.im', '.in', '.io',
'.iq', '.ir', '.is', '.it', '.je', '.jm', '.jo', '.jp', '.ke', '.kg', '.kh', '.ki',
'.km', '.kn', '.kp', '.kr', '.kw', '.ky', '.kz', '.la', '.lb', '.lc', '.li', '.lk',
'.lr', '.ls', '.lt', '.lu', '.lv', '.ly', '.ma', '.mc', '.md', '.mg', '.mh', '.mk',
'.ml', '.mm', '.mn', '.mo', '.mp', '.mq', '.mr', '.ms', '.mt', '.mu', '.mv', '.mw',
'.mx', '.my', '.mz', '.na', '.nc', '.ne', '.nf', '.ng', '.ni', '.nl', '.no', '.np',
'.nr', '.nu', '.nz', '.om', '.pa', '.pe', '.pf', '.pg', '.ph', '.pk', '.pl', '.pm',
'.pn', '.pr', '.ps', '.pt', '.pw', '.py', '.qa', '.re', '.ro', '.rw', '.ru', '.sa',
'.sb', '.sc', '.sd', '.se', '.sg', '.sh', '.si', '.sj', '.sk', '.sl', '.sm', '.sn',
'.so', '.sr', '.st', '.sv', '.sy', '.sz', '.tc', '.td', '.tf', '.tg', '.th', '.tj',
'.tk', '.tm', '.tn', '.to', '.tp', '.tr', '.tt', '.tv', '.tw', '.tz', '.ua', '.ug',
'.uk', '.um', '.us', '.uy', '.uz', '.va', '.vc', '.ve', '.vg', '.vi', '.vn', '.vu',
'.ws', '.wf', '.ye', '.yt', '.yu', '.za', '.zm', '.zw');

	var sd = mailids;
	var emailIdColl = sd.split(',');
	var emailIdString = '';
	for (var k = 0; k < emailIdColl.length; k++) {
		if (k == emailIdColl.length - 1) {
			emailIdString += trim(emailIdColl[k]);
		}
		else {
			emailIdString += trim(emailIdColl[k]) + ',';
		}
	}
	sd = emailIdString;
	var ids = sd.split("\n");
	var val = true;

	for (var j = 0; j < ids.length; j++) {
		var mai = ids[j];
		var dot = mai.lastIndexOf(".");
		var ext = mai.substring(dot, mai.length);
		var at = mai.indexOf("@");
		var dom = dot - at;
		var sp = mai.indexOf(" ");
		if (dom >= 4 && at > 1 && sp == -1) {
			for (var i = 0; i < arr.length; i++) {
				if (ext == arr[i]) {
					val = true;
					break;
				}
				else {
					val = false;
				}
			}

			var at = "@";
			var dot1 = ".";
			var str = ids[j];
			var lat = str.indexOf(at);
			var lstr = str.length;
			var ldot = str.indexOf(dot);
			var reg1 = /[\(\)\<\>\&\#\*\+\-\_\=\!\~\}\{\`\?\/\'\;\:\\\"\[\]]/;
			if (str.indexOf(dot1) == -1 || str.indexOf(dot1) == 0 || str.indexOf(dot1) == lstr || reg1.test(str)) {
				//alert("Invalid E-mail ID")
				val = false;
			}


			if (ids[j].indexOf('..') > 0 || ids[j].indexOf('@@') > 0 || ids[j].indexOf('.,') > 0 || ids[j].indexOf('@,') > 0 || ids[j].indexOf(',@') > 0 || ids[j].indexOf(',.') > 0 || ids[j].indexOf('.@') > 0 || ids[j].indexOf('@.') > 0 || ids[j].split('.').length > 3 ) {
				val = false;
			}
//			if (ids[j].indexOf(',') > 0 ) {
//				val = true;
//			}
			if (val == false) {
				//document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
				document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul> Please enter valid Email (e.g., name@site.com) </ul>";
				$find('MPEErrorMessage').show();
				return false;
			}
		}
		else {
			//document.getElementById("ctl00_maincontent_lblerrmesg").innerHTML = "Enter Valid Email Address";
			document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul> Please enter valid Email (e.g., name@site.com) </ul>";
			$find('MPEErrorMessage').show();
			return false;
		}
	}
	if (document.getElementById('ctl00_maincontent_txtsubject').value == '') {
		//document.getElementById("ctl00_maincontent_lblmsg").innerHTML = "Please enter valid Subject";
		document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul>  Please enter valid Subject </ul>";
		$find('MPEErrorMessage').show();
		document.getElementById("ctl00_maincontent_txtsubject").focus();
		return false;
	}
	else if (document.getElementById('ctl00_maincontent_ddlenqtype').value == '-1') {
		// document.getElementById("ctl00_maincontent_lblmsg").innerHTML = "Please enter valid Enquiry Type";
	document.getElementById("ctl00_maincontent_diverrorMessagecontent1").innerHTML = "<ul> Please enter valid Issue Type </ul>";
		$find('MPEErrorMessage').show();

		return false;
	}
    return true;
}
function openpasswordpopup() {   
$find('MPExtChngPwd1').show();
if (navigator.appName.indexOf("Netscape") > (-1)) {
document.getElementById("ctl00_maincontent_lblMsg").textContent="";
}
else{
document.getElementById("ctl00_maincontent_lblMsg").innerText="";
}
    return false;
}
var emailerrorElement = "";

function validateAutoCompleteEmails(txtid,txtbcc,txtcc) {

    var incorrect = '';
    var Bcc_incorrect = '';
    var Cc_incorrect = '';
    var flg = true;
    var count = 0;
    var msg = '';
    
    // For To
    var email_field = document.getElementById(txtid).value;
    email_field = extractEmail(email_field);
    var email = email_field.split(',');
    if (email_field != '') {
        for (i = 0; i < email.length; i++) {

            if (email[i].length > 0) {
                if (!validateEmail(email[i])) {
                    incorrect += '\n' + email[i];
                    flg = false;
                }

            }
        }
        if (!flg) {
            msg = "<li>One or more email addresses entered in To Field is invalid. Please check your entry and try again.(e.g., name@site.com)</li>";
            emailerrorElement = txtid;
        }
    }
    else {
        msg = "<li>Please enter one or more email addresses.</li>";
        emailerrorElement = txtid;
        flg = false;
    }
    
        //For Cc
      var email_Cc_field = document.getElementById(txtcc).value;
      email_Cc_field = extractEmail(email_Cc_field );
      var Cc_email = email_Cc_field.split(',');
      if (email_Cc_field != '') {
        for (i = 0; i < Cc_email.length; i++) {
            if (Cc_email[i].length > 0) {
                if (!validateEmail(Cc_email[i])) {
                    Cc_incorrect += '\n' + Cc_email[i];
                    flg = false;
                }

            }
        }
        if (!flg) {
             msg += "<li>One or more email addresses entered in Cc Field is invalid. Please check your entry and try again.(e.g., name@site.com)</li>" ;
            emailerrorElement = txtbcc;
        }
        }

         // For Bcc
      var email_Bcc_field = document.getElementById(txtbcc).value;
      email_Bcc_field = extractEmail(email_Bcc_field );
      var Bcc_email = email_Bcc_field.split(',');
      if (email_Bcc_field != '') {
        for (i = 0; i < Bcc_email.length; i++) {
            if (Bcc_email[i].length > 0) {
                if (!validateEmail(Bcc_email[i])) {
                    Bcc_incorrect += '\n' + Bcc_email[i];
                    flg = false;
                }

            }
        }
        if (!flg) {
            msg += "<li>One or more email addresses entered in Bcc Field is invalid. Please check your entry and try again.(e.g., name@site.com)</li>";
            emailerrorElement = txtbcc;
        }
        }
    if (msg.length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPErrorMessage').show();
    }
    return flg;
}

function extractEmail(email_field) {
    
    var emailColl = email_field.split(',');
    var emailIdString = "";

    if (emailColl.length > 0) {
        for (var i = 0; i < emailColl.length; i++) {

            var email = trim(emailColl[i]);
            if (email != '') {
                if (email.indexOf('[') > 0 && email.indexOf(']') > 0) {

                    email = email.substring(email.indexOf('[') + 1, email.indexOf(']'));
                    emailIdString += email + ',';

                }

                else {
                    emailIdString += email + ',';
                }
            }
        }
    }
    return emailIdString;


}

function checkemail(txtid) {
    var email_field = document.getElementById(txtid).value;
    var email = email_field.split(',');
    var incorrect = '';
    var flg = true;
    var count = 0;
    var msg = '';
    if (email_field != '') {
        for (i = 0; i < email.length; i++) {

            if (email[i].length > 0) {
                if (!validateEmail(email[i])) {
                    incorrect += '\n' + email[i];
                    flg = false;
                }

            }
            else {
                flg = false;
                incorrect += '\n' + msg + ',';
            }
        }
        if (!flg) {
            msg = 'One or more email addresses entered is invalid. Please check your entry and try again.' + " " + incorrect;
            emailerrorElement = txtid;
        }
    }
    else {
        msg = 'Please enter one or more email addresses.';
        emailerrorElement = txtid;
        flg = false;
    }
    if (msg.length > 0) {
        //alert(msg)
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul> " + msg + " </ul>";
        $find('MPErrorMessage').show();
    }
    return flg;
}

function validateEmail(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)) {

        testresults = true;
    }
    else {

        testresults = false;
    }
    return (testresults)
}
function validateEmail(email) {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email)) {

        testresults = true;
    }
    else {

        testresults = false;
    }
    return (testresults)
}
function OpenStudentpopup() {
    document.getElementById('ctl00_maincontent_divinviteStudent').className = 'show';
    //$find('MPEInviteStudent').show()
    $find('MPESchoolOrganList').show();
    document.getElementById('ctl00_maincontent_ddlGroup').value = -1;
    document.getElementById('ctl00_maincontent_txtemails').value = '';
    document.getElementById('ctl00_maincontent_txtmessage').value = '';
    document.getElementById('ctl00_maincontent_lblmsg').innerHTML = '';
    return false;
}

function OpenQuickPostPopup() {

    document.getElementById('ctl00_maincontent_quickPostModal_divQuickPost').className = 'show';

    $find('MPEQuickPost').show()

    return false;
}

//bright drop menu on header section

function brightDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links";
    document.getElementById('active-' + id).className = 'bulb-active';
}

function hideBright(id) {
    document.getElementById('customer-menu-' + id).className = "child-links hide";
    document.getElementById('active-' + id).className = 'bulb';
}

//bright new drop menu on header section

function brightnewDrop(id) {
    document.getElementById('customer-menu-' + id).className = "child-links";
    document.getElementById('active-' + id).className = '';
}

function hidenewBright(id) {
    document.getElementById('customer-menu-' + id).className = "child-links hide";
    document.getElementById('active-' + id).className = '';
}
function checkBCCorCCemail(txtid) {
    var email_field = document.getElementById(txtid).value;
    var email = email_field.split(',');
    var incorrect = '';
    var flg = true;
    var count = 0;
    var msg = '';
    if (email_field != '') {
        for (i = 0; i < email.length; i++) {

            if (email[i].length > 0) {
                if (!validateEmail(email[i])) {
                    incorrect += '\n' + email[i];
                    flg = false;
                }

            }
            else {
                flg = false;
                incorrect += '\n' + msg + ',';
            }
        }
        if (!flg) {
            msg = 'one or more email addresses entered is invalid' + " " + incorrect;
        }
    }
  
    if (msg.length > 0) {
    document.getElementById(txtid).focus();
        alert(msg);
    }

    return flg;
}
function assign(obj) {
    var td = document.getElementById("tbelmenu").getElementsByTagName("a");

    for (var i = 0; i < td.length; i++) {
        var id = td[i].id;
        id = id.replace("td", "tbl");
        if (td[i].id == obj.id) {
            td[i].className = "active-tab";
            document.getElementById(id).style.display = ""; //active
        }
        else {
            td[i].className = "inactive-tab";
            document.getElementById(id).style.display = "none"; //inactive
        }
    }
}
function fnplansearchvalidaion() {

    var flg = true;

    if (document.getElementById('ctl00_maincontent_txtplansearch').value == 'Search by Series Title') {
        document.getElementById("ctl00_maincontent_Label2").innerHTML = "Please enter plan name";
        document.getElementById("ctl00_maincontent_txtplansearch").focus();
        flg = false;
    }
    return flg;
}


function AddPlanscount() {

    var elmnt = document.getElementById("ctl00_maincontent_gvsearchplans");
    var rCount = elmnt.rows.length;
    var rowIdx = 1; var count = 0;

    if (navigator.appName == "Microsoft Internet Explorer") {
        for (rowIdx; rowIdx <= rCount - 1; rowIdx++) {
            var rowElement = elmnt.rows[rowIdx];
            var chkBox = rowElement.cells[0].firstChild;
            if (chkBox.checked == true) {
                count = count + 1;
            }
        }
    }
    else {
        for (rowIdx; rowIdx <= rCount - 1; rowIdx++) {
            var rowElement = elmnt.rows[rowIdx];
            var chkBox = rowElement.cells[0].childNodes[1];
            if (chkBox.checked == true) {
                count = count + 1;
            }
        }
    }

    if (count == 0) {
        document.getElementById("ctl00_maincontent_Label2").innerHTML = "Please select one or more plans to add";
        return false;
    }
    else {
        document.getElementById("ctl00_maincontent_Label2").innerHTML = "";
        return true;
    }
}
function fnquantityEmpty(obj) {
    if (obj.value == "" || obj.value=="0") {
        alert("Quantity should not be empty or zero, if u dont want to buy this remove this from list");
        obj.value = "1";
        return false;
    }
}

function fnquantitykeyup(obj)
{
    if(isNaN(obj.value))
    {
        alert("only numerics allowed");
        obj.value=obj.value.substring(0,obj.value.length-1);   
        if(isNaN(obj.value))
        {
        obj.value="1";
        }
    }   
//    if(obj.value=="")
//    {
//        alert("please enter valid quantity");
//        //obj.value = "1";
//        return false;
//    }
    if(obj.value=="0")
    {
        alert("quantity should not be zero if u dont want to buy this remove this from list");
        obj.value = "1";
    }
    if (navigator.appName.indexOf("Netscape") > (-1)) {
        document.getElementById(obj.id.replace("txtQuantity","lblSubTotal")).textContent= "$" + ((document.getElementById(obj.id.replace("txtQuantity","lblPrice")).textContent.replace("$","")) * obj.value);
        }
        else{
        document.getElementById(obj.id.replace("txtQuantity","lblSubTotal")).innerText= "$" + ((document.getElementById(obj.id.replace("txtQuantity","lblPrice")).innerText.replace("$",""))*obj.value);
        } 
        var footerQuantityid = "";
        var footerTotalAmount = "";
        if(document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length.toString().length==1)
        {
            footerQuantityid = "ctl00_maincontent_gvCheckOutItems_ctl0"+document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length+"_lblFooterQuantity";
            footerTotalAmount = "ctl00_maincontent_gvCheckOutItems_ctl0"+document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length+"_lblFooterTotalPrice";
            
        }
        else
        {
            footerQuantityid = "ctl00_maincontent_gvCheckOutItems_ctl"+document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length+"_lblFooterQuantity";
            footerTotalAmount = "ctl00_maincontent_gvCheckOutItems_ctl"+document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length+"_lblFooterTotalPrice";           
        }
        
       
        var TotQuantity =0;
        var TotAmount =0;
        for(var i = 1 ; i<document.getElementById("ctl00_maincontent_gvCheckOutItems").rows.length-1;i++)
        {
           TotQuantity = TotQuantity - - document.getElementById("ctl00_maincontent_gvCheckOutItems").rows[i].cells[7].children[0].value;
           if (navigator.appName.indexOf("Netscape") > (-1)) {
           TotAmount = TotAmount - - document.getElementById("ctl00_maincontent_gvCheckOutItems").rows[i].cells[9].children[0].textContent.replace("$","");
           }
           else{
           TotAmount = TotAmount - - document.getElementById("ctl00_maincontent_gvCheckOutItems").rows[i].cells[9].children[0].innerText.replace("$","");
           }
        }
        if (navigator.appName.indexOf("Netscape") > (-1)) {
        document.getElementById(footerQuantityid).textContent=TotQuantity.toString();
        document.getElementById(footerTotalAmount).textContent="$" + TotAmount.toString();
        }
        else{
        document.getElementById(footerQuantityid).innerText=TotQuantity.toString();
        document.getElementById(footerTotalAmount).innerText="$" + TotAmount.toString();
        } 
}
function checkPaymentInfo(pType)
{
    var msg = "";

    if (pType == "cart") {
        if ((document.getElementById("ctl00_maincontent_rdbBankBalance").checked) || (document.getElementById("ctl00_maincontent_rdbPurchaseOrder").checked)) {
            return false;
        }
    }

    if (pType == "bank") {
        if ((document.getElementById("ctl00_maincontent_chkRecurringPayments").checked == true) && (document.getElementById("ctl00_maincontent_txtStartDate").value.replace(" ", "") == "")) {
            errorElement = "ctl00_maincontent_txtStartDate";
            msg = "<li>please enter billing start date</li>" + msg; ;
            
        }
    }

    if (document.getElementById("ctl00_maincontent_chkSaveMyInformation").checked) {
        if (document.getElementById("ctl00_maincontent_txtCardNickName").value.replace(" ", "") == "") {
            errorElement = "ctl00_maincontent_txtCardNickName";
            msg = "<li>please enter card nick name</li>" + msg; ;
        }
    }   

    if (document.getElementById("ctl00_maincontent_ddlCountry").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_ddlCountry";
        msg = "<li>please select country name</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtZipCode").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtZipCode";
        msg = "<li>please enter zip code</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_ddlState").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_ddlState";
        msg = "<li>please select state</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtCity").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtCity";
        msg = "<li>please enter city name</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtAddress1").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtAddress1";
        msg = "<li>please enter street/address</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_ddlExpYear").value.replace(" ", "") == "0") {
        errorElement = "ctl00_maincontent_ddlExpYear";
        msg = "<li>please select expiry year</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_ddlExpMonth").value.replace(" ", "") == "0") {
        errorElement = "ctl00_maincontent_ddlExpMonth";
        msg = "<li>please select expiry month</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtSecurityCode").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtSecurityCode";
        msg = "<li>please enter security code</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtLastName").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtLastName";
        msg = "<li>please enter last Name</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtFirstName").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtFirstName";
        msg = "<li>please enter first Name</li>" + msg; ;
    }

    if (document.getElementById("ctl00_maincontent_txtCardNumber").value.replace(" ", "") == "") {
        errorElement = "ctl00_maincontent_txtCardNumber";
        msg = "<li>please enter card number</li>" + msg; ;
    }
    else {
        if (document.getElementById("ctl00_maincontent_txtCardNumber").value.replace(" ", "").length < 15) {
            errorElement = "ctl00_maincontent_txtCardNumber";
            msg = "<li>invalid card number it should contain minimum 15 digits</li>" + msg; ;
        }
    }

    if (document.getElementById("ctl00_maincontent_ddlCardType").value.replace(" ", "") == "0") {
        errorElement = "ctl00_maincontent_ddlCardType";
        msg = "<li>please select card type</li>" + msg; ;
    }

    if (pType == "bank") {

        if (document.getElementById("ctl00_maincontent_txtAmount").value.replace(" ", "") == "0") {
            errorElement = "ctl00_maincontent_txtAmount";
            msg = "<li>please enter valid amount</li>" + msg; ;
        }
        else if (document.getElementById("ctl00_maincontent_txtAmount").value.replace(" ", "") == "") {
            errorElement = "ctl00_maincontent_txtAmount";
            msg = "<li>please enter valid amount</li>" + msg; ;
        }
    }
    
    if (msg.replace(" ", "").length > 0) {
        document.getElementById("ctl00_maincontent_diverrorMessagecontent").innerHTML = "<ul>" + msg + "</ul>";
        $find('MPEexistsMember').show();
        return false;
    }
    else
        return true;
}
function toggleMenuUp() {

    document.getElementById('menu0').style.display = 'none';
    document.getElementById('menu1').style.display = 'block';

}


function ValidateEmployeeNo() {
    var flg = true;
    if (document.getElementById("ctl00_maincontent_txtempnumber").value == "") {
    	document.getElementById("ctl00_maincontent_lblupdatemsg").innerHTML = "Please enter an ID number.";
    	document.getElementById('ctl00_maincontent_lblupdatemsg').className = "error-msg";
        flg = false;
    }
    return flg;
}

function ValidateStudentNotes() {
    var flg = true;
    if (document.getElementById("ctl00_maincontent_txtnotes").value == "") {
        document.getElementById("ctl00_maincontent_lblnotesmsg").innerHTML = "Please enter Notes";
        flg = false;
    }
    return flg;
}

// kranthi added on 06/02/2010
function fnAlsobyTrainerClick() {
    document.getElementById("dvAlsoByTrainer").className = "link-box-active";
    document.getElementById("dvRelatedCoures").className = "link-box-normal";
    document.getElementById("dvTrainerProfileClick").className = "link-box-normal";
}
function fnTrainerProfileClick() {
    document.getElementById("dvAlsoByTrainer").className = "link-box-normal";
    document.getElementById("dvRelatedCoures").className = "link-box-normal";
    document.getElementById("dvTrainerProfileClick").className = "link-box-active";
}
function fnRelatedCouresClick() {
    document.getElementById("dvAlsoByTrainer").className = "link-box-normal";
    document.getElementById("dvRelatedCoures").className = "link-box-active";
    document.getElementById("dvTrainerProfileClick").className = "link-box-normal";
}

function fnTrainCouresCreateEditClick() {
  
    if (document.getElementById("ctl00_maincontent_hdnIsTrainer").value == "True") {
        window.location = "create-edit-course-new.aspx?mode=0";
        return true;
    }
    else {
      
        $find('MPETrainerPop').show();
        return false;
    }
}

//this function is for opening a new window in defined width and height without menubar
function wopen(url, name, w, h){
    w += 32;
    h += 96;
    var win = window.open(url, name,'width=' + w + ', height=' + h + ', ' + 'location=no, menubar=no, ' + 'status=no, toolbar=no, scrollbars=yes, resizable=no');
    win.resizeTo(w, h);
    win.focus();
}

// This method is used to generate a confirm message for activating and deactivating a student in manage student page
function changeStatusConfirm(link) {
    
    if (link.innerHTML == 'Active') {
        return confirm('Making an employee Inactive removes all assigned courses from that employee.  Are you sure?');
    }
    else if (link.innerHTML == 'Inactive') {
        return confirm('All assigned courses will be reassigned to this employee.  Are you sure?');
    }
}

// This method is used for select/Unselect all the checkboxes in the customize popup window.
function checkUncheckAll() {
    var checkboxes = document.getElementById('tblCustomize').getElementsByTagName('input');
    var checkStatus = "checkAll";
    for (var i = 3; i < checkboxes.length; i++) {
        if (checkboxes[i].type == "checkbox") {
            if (checkboxes[i].checked) {
                checkStatus = "uncheckAll";
                break;
            }
        }
    }
    if (checkStatus == "checkAll") {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].type == "checkbox") {
                checkboxes[i].checked = true;
            }
        }
    }
    else if (checkStatus == "uncheckAll") {
        for (var i = 3; i < checkboxes.length; i++) {
            if (checkboxes[i].type == "checkbox") {
            	checkboxes[i].checked = false;
            }
           }
            
//           document.getElementById('ctl00_maincontent_createcourseShow1').style.display = 'none';
//           document.getElementById('ctl00_maincontent_createcourseShow2').style.display = 'none';
//           document.getElementById('ctl00_maincontent_createcourseShow3').style.display = 'none';
//           document.getElementById('ctl00_maincontent_gvstudents').style.display = 'none';
    }
      
}


// To Hide/Display the thumbnail column in Learn->Courses Page
function changeListThumbNail_Courses(do_show) {

    //alert('reached');
    var stl;
    var thStyle;
    var tdStyle;
    
    if (do_show) 
    {
        thStyle = "grid-view-vertical-line";
        tdStyle = "grid-view-padding-left";
        //stl = '';
        
        // active/inactive the List/Thumbnails text
        document.getElementById("anchorlist").className = 'list-view-active';
        document.getElementById("anchorthumb").className = 'list-view-inactive';
        document.getElementById('ctl00_maincontent_hdnCourseListGridView').value = "THUMB";
    }
    else 
    {
        thStyle = "grid-view-vertical-line hide";
        tdStyle = "grid-view-padding-left hide";

        //stl = 'none';
        // active/inactive the List/Thumbnails text
        document.getElementById("anchorlist").className = 'list-view-inactive';
        document.getElementById("anchorthumb").className = 'list-view-active';
        document.getElementById('ctl00_maincontent_hdnCourseListGridView').value = "LIST";
    }
    
    var col_no = 2; // Thumbnail column in Learn->Courses page
    var tbl = document.getElementById('ctl00_maincontent_gvcourses');
    var rows = tbl.getElementsByTagName('tr');
    
    var headerCells;
    var rowCells;
    for (var row = 0; row < rows.length; row++) {
        if (row == 0) {
           
            headerCells = rows[row].getElementsByTagName('th');
           // headerCells[col_no].style.display = stl;
            headerCells[col_no].className = thStyle;
            

        }
        else {
            rowCells = rows[row].getElementsByTagName('td');
            //rowCells[col_no].style.display = stl;
            rowCells[col_no].className = tdStyle;
        }
    }
}

//this method will assign a default button for to activate on ENTER key press
function clickButton(e, buttonid) {
    var evt = e ? e : window.event;
    var bt = document.getElementById(buttonid);
    if (bt) {
        if (evt.keyCode == 13) {
            bt.click();
            return false;
        }
    }
}


function show_hide(div) {

    if (document.getElementById(div).style.display == 'none') {
        document.getElementById(div).style.display = 'block';
    } else {
        document.getElementById(div).style.display = 'none';

    }
}

function showRecurring(chkBtn) {
    if(chkBtn.checked == true)
        document.getElementById('divRecPay').style.display = 'block';
    else
        document.getElementById('divRecPay').style.display = 'none';            
}

function checkSaveCard(chkBtn) {
    if (chkBtn.checked == true)
        document.getElementById('divNickName').style.display = 'block';
    else
        document.getElementById('divNickName').style.display = 'none';
}


// Text Box Validation for Number, Decimal Places, allow Negative
function extractNumber(obj, decimalPlaces, allowNegative) {
    var temp = obj.value;

    // avoid changing things if already formatted correctly
    var reg0Str = '[0-9]*';
    if (decimalPlaces > 0) {
        reg0Str += '\\.?[0-9]{0,' + decimalPlaces + '}';
    } else if (decimalPlaces < 0) {
        reg0Str += '\\.?[0-9]*';
    }
    reg0Str = allowNegative ? '^-?' + reg0Str : '^' + reg0Str;
    reg0Str = reg0Str + '$';
    var reg0 = new RegExp(reg0Str);
    if (reg0.test(temp)) return true;

    // first replace all non numbers
    var reg1Str = '[^0-9' + (decimalPlaces != 0 ? '.' : '') + (allowNegative ? '-' : '') + ']';
    var reg1 = new RegExp(reg1Str, 'g');
    temp = temp.replace(reg1, '');

    if (allowNegative) {
        // replace extra negative
        var hasNegative = temp.length > 0 && temp.charAt(0) == '-';
        var reg2 = /-/g;
        temp = temp.replace(reg2, '');
        if (hasNegative) temp = '-' + temp;
    }

    if (decimalPlaces != 0) {
        var reg3 = /\./g;
        var reg3Array = reg3.exec(temp);
        if (reg3Array != null) {
            // keep only first occurrence of .
            //  and the number of places specified by decimalPlaces or the entire string if decimalPlaces < 0
            var reg3Right = temp.substring(reg3Array.index + reg3Array[0].length);
            reg3Right = reg3Right.replace(reg3, '');
            reg3Right = decimalPlaces > 0 ? reg3Right.substring(0, decimalPlaces) : reg3Right;
            temp = temp.substring(0, reg3Array.index) + '.' + reg3Right;
        }
    }

    obj.value = temp;
}

function blockNonNumbers(obj, e, allowDecimal, allowNegative) {
    var key;
    var isCtrl = false;
    var keychar;
    var reg;

    if (window.event) {
        key = e.keyCode;
        isCtrl = window.event.ctrlKey
    }
    else if (e.which) {
        key = e.which;
        isCtrl = e.ctrlKey;
    }

    if (isNaN(key)) return true;

    keychar = String.fromCharCode(key);

    // check for backspace or delete, or if Ctrl was pressed
    if (key == 8 || isCtrl) {
        return true;
    }

    reg = /\d/;
    var isFirstN = allowNegative ? keychar == '-' && obj.value.indexOf('-') == -1 : false;
    var isFirstD = allowDecimal ? keychar == '.' && obj.value.indexOf('.') == -1 : false;

    return isFirstN || isFirstD || reg.test(keychar);
}

// End Text Box Validation

/* For fixing Story ID:5082855  -- View List / View Thumbnails in Create/Edit Series -- START */ 
function changeThumbSeries() {
    document.getElementById("anchorlist").className = 'list-view-active';
    document.getElementById("anchorthumb").className = 'list-view-inactive';
    document.getElementById('ctl00_maincontent_hdnCourseListGridView').value = "THUMB";
    document.getElementById("ctl00_maincontent_divthumb").style.display = 'inline';
    document.getElementById("ctl00_maincontent_divlist").style.display = 'none';
}

function changeListSeries() {
    document.getElementById("anchorlist").className = 'list-view-inactive';
    document.getElementById("anchorthumb").className = 'list-view-active';
    document.getElementById('ctl00_maincontent_hdnCourseListGridView').value = "LIST";
    document.getElementById("ctl00_maincontent_divthumb").style.display = 'none';
    document.getElementById("ctl00_maincontent_divlist").style.display = 'inline';
}
/* For fixing Story ID:5082855 -- View List / View Thumbnails in Create/Edit Series -- END */


function enableEnterKey(e, btn) {
    var evt = e ? e : window.event;
    //var bt = document.getElementById(buttonid);
    if (btn) {
        if (evt.keyCode == 13) {
            btn.click();
            return false;
        }
    }
}

