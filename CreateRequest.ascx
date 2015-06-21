<%@ Control Language="vb" AutoEventWireup="false" CodeBehind="CreateRequest.ascx.vb"
    Inherits="ChangeRequest.CreateRequest" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
    <div id="tab-panel-1">
        <telerik:RadTabStrip ID="RadTfabStrip1" runat="server" MultiPageID="RadMultiPage1"
            Width="910px" SelectedIndex="0" ValidationGroup="User"  Skin="Vista" EnableEmbeddedSkins="true">
            <Tabs>
                <telerik:RadTab Text="Change Request" Width="120px" PageViewID="RadPageUserInfo" 
                    TabIndex="0" Selected="True">
                </telerik:RadTab>
                <telerik:RadTab Text="Risk Assessment" Width="120px" TabIndex="1" PageViewID="RadPagePersonalInfo">
                </telerik:RadTab>
            </Tabs>
        </telerik:RadTabStrip>
        <telerik:RadMultiPage ID="RadMultiPage1" runat="server" Width="890px">
            <telerik:RadPageView ID="RadPageUserInfo" Width="890px" runat="server" Style="border: 0px"
                CssClass="block-content tab-container">
                <div>
                    <div style="margin-left: 44px; width: 842px">
                        <span id="ErrorSpan" style="width: 880px"></span>
                        <asp:Panel ID="pnlinfo1" class="Info1" runat="server" Style="display: none; font-size:13px;" >
                            <div class="alert info" style="height: 20px">
                                
                                <asp:Label ID="LabInfo1" class="Infomsg1" runat="server" /></div>
                        </asp:Panel>
                    </div>
                    <div>
                     <table width="100%">
                            <tr style="margin-left: 0x;">
                                <td>
                                    <!--! end of #block-actions -->
                                   <div class="login_button" style="clear: both; margin-left: 570px; margin-right: auto;width: 370px;">
                                         <span>  <asp:Button ID="BtnCancel1" runat="server" CausesValidation="false" CommandName="Cancel"
                                                            Text="Cancel" CssClass="button red" /></span>
                                                       <span>  <asp:Button ID="BtnUpdate1" runat="server" Text="Update" ValidationGroup="User" CssClass="button" /></span>
<span><asp:Button ID="BtnSave1" runat="server" Text="Save" ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                             <asp:Button ID="BtnSaveandSubmit1" Width="150px"  runat="server" Text="Save and Submit" ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" />
                                                            <asp:HiddenField id="HiddenField2" runat="server" />
                                                            <span>  <asp:Button ID="BtnApprove1"  runat="server" Text="Approved" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                              <span><asp:Button ID="BtnReject1"  runat="server" Text="Reject" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>


                                                            <span><asp:Button ID="BtnAssign1"  runat="server" Text="Assign" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                                    <span><asp:Button ID="BtnReview1"  runat="server" Text="Review" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                                    <span><asp:Button ID="BtnClosed1"  runat="server" Text="Closed" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                    </div>
                                    <!--! end of #block-actions -->
                                </td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>
                                    <div>
                                        <p style="margin-left: 10px; margin-top: 20px;" class="inline-small-label">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field4">
                                                Number</label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <asp:Label ID="txtempid" EnableTheming="false" ForeColor="Black" runat="server"  Visible="false"></asp:Label>
                                            <asp:TextBox ID="TxtNumber" runat="server" CssClass="required" Width="250px" Height="25px" 
                                                onkeydown="return (event.keyCode!=13);"  Enabled="false"  TabIndex="1"></asp:TextBox>
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="TxtNumber" CssClass="error" ErrorMessage="Number field is Required!">
                                            </asp:RequiredFieldValidator></div>
                                        <p class="inline-small-label" style="margin-top: 20px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field5">
                                                Requested by
                                            </label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <%--<asp:TextBox ID="TxtRequestedby" runat="server" CssClass="required" Width="250px"
                                                Height="25px" onkeydown="return (event.keyCode!=13);" TabIndex="2" MaxLength="249"></asp:TextBox>--%>
                                                <telerik:RadComboBox ID="RCBRequestedBy" runat="server" Width="252px" TabIndex="2" DataTextField="Name" DataValueField="UserID" MaxLength="249">
 
                                            </telerik:RadComboBox>
                                          
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="RCBRequestedBy" CssClass="error" ErrorMessage="Requested by field is required."></asp:RequiredFieldValidator>
                                        </div>
                                        <p class="inline-small-label" style="margin-top: 10px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field6">
                                                Type</label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <telerik:RadComboBox ID="RCType" runat="server" Width="252px" TabIndex="3"  >
                                                <Items>
                                                    <telerik:RadComboBoxItem Value="0" Selected="true" Text="Normal" />
                                                    <telerik:RadComboBoxItem Value="1" Text="Emerency" />
                                                    <telerik:RadComboBoxItem Value="2" Text="Standard" />
                                                    <telerik:RadComboBoxItem Value="3" Text="Urgent" />
                                                </Items>
                                            </telerik:RadComboBox>
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="RCType" CssClass="error" InitialValue="0" ErrorMessage="Type field is required."></asp:RequiredFieldValidator>
                                        </div>
                                        <%-- <p class="inline-small-label" style="margin-left: 10px">
                        <label for="field7">
                            State</label></p>
                    <div class="error" style="margin-left: 140px;margin-top:-27px">
                        <telerik:RadComboBox ID="RCState" runat="server" Width="252px" AutoPostBack="true"  Height="25px">
                            <Items>
                                <telerik:RadComboBoxItem Selected="true" Value="1" Text="New" />
                                
                            </Items>
                        </telerik:RadComboBox>
                    </div>--%>
                                        <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Assignment Group</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <asp:TextBox ID="TxtAssingnment" EnableViewState="false" runat="server" Height="25px"
                                                Width="250px" ValidationGroup="User" TabIndex="4" onkeyUp="validationconPwd();"
                                                onkeypress="return (event.keyCode!=13);" CssClass="required" MaxLength="249"></asp:TextBox></div>
                                        <div class="error" style="margin-left: 140px">
                                            <br />
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="TxtAssingnment" CssClass="error" ErrorMessage="Assignment Group field is Required!">
                                            </asp:RequiredFieldValidator></div>

                                            <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Deployment Plan</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <asp:TextBox ID="TxtDeployment" EnableViewState="false" runat="server" Height="25px"
                                                Width="250px" ValidationGroup="User" TabIndex="5" onkeyUp="validationconPwd();"
                                                onkeypress="return (event.keyCode!=13);" CssClass="required" MaxLength="249"></asp:TextBox></div>
                                        <div class="error" style="margin-left: 140px">
                                            <br />
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="TxtDeployment" CssClass="error" ErrorMessage="Deployment plan field is Required!">
                                            </asp:RequiredFieldValidator></div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <p style="margin-left: 10px; margin-top: 20px;" class="inline-small-label">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field4">
                                                Opened</label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                        
                                            <telerik:RadDateTimePicker ID="TxtOpended" runat="server"  TabIndex="6" Width="180px" >
                                            </telerik:RadDateTimePicker>
                                            <%--<asp:TextBox ID="TxtOpended" runat="server" CssClass="required" Width="250px"  Height="25px" onkeydown="return (event.keyCode!=13);"
                            TabIndex="5"></asp:TextBox>--%>
                                        </div>
                                        <p class="inline-small-label" style="margin-top: 20px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field5">
                                                Customer Opened Date
                                            </label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <%--<asp:TextBox ID="TxtCoPenDate" runat="server" CssClass="required" Width="250px"  Height="25px" onkeydown="return (event.keyCode!=13);"
                            TabIndex="6"></asp:TextBox>--%>
                                            <telerik:RadDateTimePicker ID="TxtCoPenDate" runat="server" TabIndex="7"   Width="180px">
                                            </telerik:RadDateTimePicker>
                                        </div>
                                        <p class="inline-small-label" style="margin-top: 10px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field6">
                                                Requestor</label>
                                        </p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                          <telerik:RadComboBox ID="RCBRequestor" runat="server" Width="252px" TabIndex="8" DataTextField="Name" DataValueField="UserID" MaxLength="249">
 
                                            </telerik:RadComboBox>
                                            <%--<asp:TextBox ID="TxtRequestor" runat="server" CssClass="required" Width="250px" Height="25px"
                                                onkeydown="return (event.keyCode!=13);" TabIndex="7"></asp:TextBox>--%>
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="RCBRequestor" CssClass="error" ErrorMessage="Requestor field is Required!">
                                            </asp:RequiredFieldValidator></div>
                                        <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Approval</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <telerik:RadComboBox ID="RCApproval" runat="server" Width="252px" AutoPostBack="true"
                                                TabIndex="9" MaxLength="249">
                                                <Items>
                                                    <telerik:RadComboBoxItem Value="0" Selected="true" Text="Not yet Requested" />
                                                </Items>
                                            </telerik:RadComboBox>
                                        </div>
                                        <br />
                                        <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Assign To</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <telerik:RadComboBox ID="RCAssignTo" runat="server" Width="252px" DataTextField="Name" DataValueField="UserID" TabIndex="10">
                                            </telerik:RadComboBox>
                                            <%--<asp:TextBox ID="TxtAssingnto" EnableViewState="false" runat="server"  Height="25px"
                            Width="250px" ValidationGroup="User" TabIndex="3" onkeyUp="validationconPwd();"
                            onkeypress="return (event.keyCode!=13);" CssClass="required"></asp:TextBox>--%></div>
                                        <div class="error" style="margin-left: 140px">
                                            <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator8" SetFocusOnError="true"
                                                ValidationGroup="User" runat="server" ControlToValidate="TxtAssingnto" CssClass="error"
                                                ErrorMessage="Assign To field is Required!">
                                            </asp:RequiredFieldValidator>--%>
                                            <br />
                                        </div>
                                        <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Status</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <telerik:RadComboBox ID="RCStatus" runat="server" Width="252px" TabIndex="11"  Enabled="false" >
                                                
                                            </telerik:RadComboBox>
                                        </div>
                                        <br />
                                            <p class="inline-small-label" style="margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field7">
                                                Backout Plan</label></p>
                                        <div class="error" style="margin-left: 140px; margin-top: -27px">
                                            <asp:TextBox ID="Txtbackout" EnableViewState="false" runat="server" Height="25px"
                                                Width="250px" ValidationGroup="User" TabIndex="12" onkeyUp="validationconPwd();"
                                                onkeypress="return (event.keyCode!=13);" CssClass="required" MaxLength="249"></asp:TextBox></div>
                                        <div class="error" style="margin-left: 140px">
                                            <br />
                                        </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator8" SetFocusOnError="true" ValidationGroup="User"
                                                runat="server" ControlToValidate="Txtbackout" CssClass="error" ErrorMessage="Backout Plan field is Required!">
                                            </asp:RequiredFieldValidator></div>
                                    </div>
                                    `
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <p style="margin-left: 10px; margin-top: 20px;" class="inline-small-label">
                                    <span style="color:Red;font-size:16px">*</span>
                                        <label for="field4">
                                            Short Description</label>
                                    </p>
                                    <div class="error" style="margin-left: 140px; margin-top: -27px">
                                        <asp:TextBox ID="TxtShortDescription" runat="server" CssClass="required" Width="636px"
                                            Height="70px" TextMode="MultiLine" MaxLength="49" onkeydown="return (event.keyCode!=13);"
                                            TabIndex="13"></asp:TextBox>
                                    </div>
                                    <div class="error" style="margin-left: 140px">
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator11" SetFocusOnError="true"
                                            ValidationGroup="User" runat="server" ControlToValidate="TxtShortDescription"
                                            CssClass="error" ErrorMessage="Short Description field is Required!">
                                        </asp:RequiredFieldValidator></div>
                                    <p style="margin-left: 10px; margin-top: 20px;" class="inline-small-label">
                                    <span style="color:Red;font-size:16px">*</span>
                                        <label for="field4">
                                            Description</label>
                                    </p>
                                    <div class="error" style="margin-left: 140px; margin-top: -27px">
                                        <asp:TextBox ID="TxtDescription" runat="server" CssClass="required" Width="636px"
                                            Height="70px" TextMode="MultiLine" onkeydown="return (event.keyCode!=13);" TabIndex="14"></asp:TextBox>
                                    </div>
                                    <div class="error" style="margin-left: 140px">
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" SetFocusOnError="true" ValidationGroup="User"
                                            runat="server" ControlToValidate="TxtDescription" CssClass="error" ErrorMessage="Description field is Required!">
                                        </asp:RequiredFieldValidator>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <!-- Begin of #block-actions -->
                        <table width="100%">
                            <tr style="margin-left: 0x;">
                                <td>
                                    <!--! end of #block-actions -->
                                   <div class="login_button" style="clear: both; margin-left: 570px; margin-right: auto;width: 370px;">
                                         <span>  <asp:Button ID="btnCancel" runat="server" CausesValidation="false" CommandName="Cancel"
                                                            Text="Cancel" CssClass="button" stlye="background-color: #FFFFFF;border: 1px solid #E2E3EA;color: #333333;" /></span>
                                                       <span>  <asp:Button ID="btnUpdate" runat="server" Text="Update" ValidationGroup="User" CssClass="button" /></span>
<span><asp:Button ID="btnInsert" runat="server" Text="Save" ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                             <asp:Button ID="BtnSaveAndSubmit"  Width="150px"  runat="server" Text="Save and Submit" ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" />
                                                            <asp:HiddenField id="hfvalue" runat="server" />
                                                            <span>  <asp:Button ID="BtnApprove"  runat="server" Text="Approved" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                              <span><asp:Button ID="BtnReject"  runat="server" Text="Reject" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>

                                                             <span><asp:Button ID="BtnAssign"  runat="server" Text="Assign" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                                    <span><asp:Button ID="BtnReview"  runat="server" Text="Review" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                                                    <span><asp:Button ID="BtnClosed"  runat="server" Text="Closed" Visible="false"  ValidationGroup="User" CssClass="button"
                                                            CommandName="submit" /></span>
                                    </div>
                                    <!--! end of #block-actions -->
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </telerik:RadPageView>
            <telerik:RadPageView ID="RadPagePersonalInfo" Width="890px" runat="server" Style="border: 0px;
                margin-top: -10px" CssClass="block-content tab-container">
                <div style="margin-left: 44px; width: 842px">
                    <asp:Panel ID="PnlError2" runat="server" Visible="false">
                        <div class="alert error">
                            <span class="hide">x</span>
                            <asp:Label ID="Laberror2" runat="server" /></div>
                    </asp:Panel>
                    <asp:Panel ID="pnlinfo" class="Info" runat="server" Style="display: none" >
                            <div class="alert info" style="height: 20px">
                                
                                <asp:Label ID="LabInfo" class="Infomsg" runat="server" /></div>
                        </asp:Panel>
                </div>
                <asp:Panel ID="PnlSecond" runat="server" >
                <table>
                <tr>
                <td>
                <div>
                                        <p style="margin-left: 10px; margin-top: 20px;" class="inline-small-label">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label for="field4" id="LblComplex" runat="server">
                                                 </label>
                                        </p>
                                        <div style="margin-left:20px">
                                            <asp:RadioButtonList ID="RBLComplex" runat="server" RepeatDirection="Horizontal"  >
                                            </asp:RadioButtonList>
                                           </div>
                                        <div>
                                          
                                            </div>
                                        <div class="error" style="margin-left: 140px">
 
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator9" ValidationGroup="Risk" runat="server" ErrorMessage="Please select the Option" ControlToValidate="RBLComplex"></asp:RequiredFieldValidator>
                                            </div>
                                        <p class="inline-small-label" style="margin-top: 20px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label  id="LblVerify" runat="server" for="field5">
                                                </label>
                                        </p>
                                        <div style="margin-left:20px">
                                            <asp:RadioButtonList ID="RBLVerify" runat="server"  RepeatDirection="Horizontal"  >
                                            </asp:RadioButtonList>
                                       </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ValidationGroup="Risk" ControlToValidate="RBLVerify" ErrorMessage="Please select the Option"></asp:RequiredFieldValidator>
                                        </div>
                                        <p class="inline-small-label" style="margin-top: 10px; margin-left: 10px">
                                        <span style="color:Red;font-size:16px">*</span>
                                            <label  id="LblDiffcult" runat="server" for="field6">
                                                </label>
                                        </p>
                                        <div style="margin-left:20px">
                                            <asp:RadioButtonList ID="RBLDifficult" runat="server"  RepeatDirection="Horizontal" >
                                            </asp:RadioButtonList>
                                       </div>
                                        <div class="error" style="margin-left: 140px">
                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator12" ControlToValidate="RBLDifficult" ValidationGroup="Risk" runat="server" ErrorMessage="Please select the Option"></asp:RequiredFieldValidator>
                                        </div>
                                        </div>
                                              </td>
                </tr>
                </table>
                
                 <!-- Begin of #block-actions -->
                        <table>
                            <tr style="margin-left: -20x;">
                                <td>
                                    <!--! end of #block-actions -->
                                    <div class="login_button">
                                           <asp:Button ID="Button1" runat="server" CausesValidation="false" CommandName="Cancel"
                                                            Text="Cancel" CssClass="button" />
                                                        <%--<asp:Button ID="Button2" runat="server" Text="Update" ValidationGroup="User" CssClass="button" /> OnClick="BtnRistSubmit_Click"--%>
                                                        <asp:Button ID="BtnRistSubmit"  runat="server" Text="Submit" ValidationGroup="Risk" CssClass="button"  />
                                                            <asp:HiddenField id="HiddenField1" runat="server" />
                                    </div>
                                    <!--! end of #block-actions -->
                                </td>
                            </tr>
                        </table>
                        </asp:Panel>
            </telerik:RadPageView>
        </telerik:RadMultiPage>
        
        </div>

<script type="text/javascript" >

    function closeConfirmMessage() {
        $("#confMsg_containerMain").attr("style", "display:none");
        $("#confMsg_containerMain").fadeOut(1000)
    }
    function SportEventCreatedConfirmation(displaymsg) {
        alert("welcome")
        $("#spanConfirmMsg").html(displaymsg);
        $("#confMsg_containerMain").removeAttr("style");
        $("#divConfirmMsgBackground").removeAttr("style");
    } 
</script>
