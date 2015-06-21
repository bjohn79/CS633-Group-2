<%@ Page Title="" Language="vb" AutoEventWireup="false" MasterPageFile="~/MasterPage/WebSite.Master" CodeBehind="ChangeRequest.aspx.vb" Inherits="ChangeRequest.ChangeRequest1" %>
<%@ MasterType VirtualPath="~/MasterPage/WebSite.Master" %>  
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript" >

    function viewall(score, status) {
        var str = "<span style='font-size:16px'>Score</span>&nbsp&nbsp&nbsp&nbsp<span style='font-size:16px;margin-left:30px'>Risk</span><br/><br/><span>" + score + "</span>&nbsp&nbsp&nbsp&nbsp<span style='margin-left:70px'>" + status + "</span>";
        $("#spanConfirmMsg").html(str);
        $("#confMsg_containerMain").removeAttr("style");
        $("#divConfirmMsgBackground").removeAttr("style");
    }
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
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="maincontent" runat="server">
  
  
    <%--<telerik:RadScriptManager runat="server" ID="RadScriptManager1" />--%>
    <%--<telerik:RadSkinManager ID="RadSkinManager1" runat="server" ShowChooser="true" />--%>
     <div style="margin: 10px 0px 10px 0px;">
                                        <asp:Panel ID="pnlError" runat="server"   style="display:none">
                                            <div class="alert error" style="height: 20px">
                                                <span class="hide">x</span>
                                                <asp:Label ID="LabError" runat="server" /></div>
                                        </asp:Panel>
                                        <asp:Panel ID="pnlSuccess" runat="server"  style="display:none" onclick="CloseSuccess();">
                                            <div class="alert success" style="height: 20px">
                                                <span class="hide">x</span>
                                                <asp:Label ID="LabSuccess" runat="server" /></div>
                                        </asp:Panel>
                                    </div>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
        <AjaxSettings>
            <telerik:AjaxSetting AjaxControlID="RG_ChnageReuquest">
                <UpdatedControls>
                    <telerik:AjaxUpdatedControl ControlID="RG_ChnageReuquest" LoadingPanelID="RadAjaxLoadingPanel1" />
                </UpdatedControls>
            </telerik:AjaxSetting>
        </AjaxSettings>
    </telerik:RadAjaxManager>
    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
    <telerik:RadFormDecorator ID="RadFormDecorator1" runat="server" DecorationZoneID="demo" EnableRoundedCorners="false" DecoratedControls="All" />
    <div id="demo" class="demo-container no-bg">
        <telerik:RadGrid ID="RG_ChnageReuquest" OnNeedDataSource ="RG_NeedDataSource" runat="server"  OnItemDataBound="RG_OnItemDataBound"
          OnItemCommand="RG_ChnageReuquest_ItemCommand"  OnItemCreated="RG_ChnageReuquest_ItemCreated"
              OnPreRender="RG_ChnageReuquest_PreRender"  AutoGenerateColumns="false" AllowPaging="true"  Skin="Vista" EnableEmbeddedSkins="true"
                                            Width="970px"  AllowMultiRowSelection="false"
                                              Style="margin-top: 10px" 
               >
            
            <PagerStyle Mode="NextPrevAndNumeric" />
            <MasterTableView  AutoGenerateColumns="False"
                DataKeyNames="ID"  CommandItemDisplay="Top">
                <Columns>
                    <telerik:GridEditCommandColumn ButtonType="ImageButton" UniqueName="EditCommandColumn">
                    </telerik:GridEditCommandColumn>
                    <telerik:GridTemplateColumn>
                    <ItemTemplate>
                    <asp:Image ID="ImgView" runat="server" ImageUrl="~/Images/search.gif"  style="cursor:pointer" />
                        <asp:Label ID="LblScore" runat="server" Text='<%#Eval("RiskScore") %>' style="display:none"></asp:Label>
                        <asp:Label ID="LblRisk" runat="server"  Text='<%# Eval("Risk") %>' style="display:none"></asp:Label>
                        <asp:Label ID="LbStatus" runat="server"  Text='<%# Eval("StatusID") %>' style="display:none"></asp:Label>
                    </ItemTemplate>
                    </telerik:GridTemplateColumn>
                    <telerik:GridBoundColumn DataField="Number" HeaderText="Number" SortExpression="Number"
                        UniqueName="Number" MaxLength="5">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="StatusName" HeaderText="Status" SortExpression="StatusName"
                        UniqueName="Status">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="Opened" HeaderText="Updated" SortExpression="UpdatedUpdated"
                        UniqueName="Updated">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="ShortDescription" HeaderText="ShortDescription" SortExpression="ShortDescription"
                        UniqueName="ShortDescription">
                    </telerik:GridBoundColumn>
                    <%--<telerik:GridBoundColumn DataField="Phone" HeaderText="Phone" SortExpression="Phone"
                        UniqueName="Phone">
                    </telerik:GridBoundColumn>--%>
                    <telerik:GridButtonColumn CommandArgument="ID" Text="Delete" CommandName="Delete" ButtonType="ImageButton" ConfirmText="Are you sure want to delete?" />
                </Columns>
                 <NoRecordsTemplate>
                                                    <div style="height: 20px; padding-left: 20px;">
                                                        <asp:Label ID="lbl_Records" runat="server" EnableTheming="false" Text="No request found"
                                                            Font-Size="Small" ForeColor="black"></asp:Label>
                                                    </div>
                                                </NoRecordsTemplate>
                                                    <CommandItemTemplate>
                                                    <div style="padding: -0px 0px; height: 25px">
                                                        <table style="height: 25px">
                                                            <tr>
                                                                <td>
                                                                    <h1>
                                                                        <div style="margin-top: -16px; font-size:13px; width:204px;">

                                                                            Change Request</div>
                                                                    </h1>
                                                                </td>
                                                                <td>
                                                                    <h6>
                                                                       <div align="right" style="font-size:14px;font-weight: normal;margin-left: 645px;margin-top: -22px;">

                                                                            <img style="border: 0px; vertical-align: middle; cursor: default; " alt="" src="~/Images/add_small.png"
                                                                                id="Img_NewImage" runat="server" />
                                                                            <img style="border: 0px; vertical-align: middle;" alt="" visible="false" src="~/Images/edit.gif"
                                                                                id="Img1" runat="server" />
                                                                            <asp:LinkButton ID="btnAdd" EnableTheming="false" CommandName="InitInsert" runat="server"
                                                                                Text="Add Request" ForeColor="White"></asp:LinkButton>
                                                                            <asp:Label ID="btnAdd1" runat="server" Visible="false" Text="New Request" ForeColor="#475D68"></asp:Label>
                                                                            <asp:Label ID="BtnEdit" runat="server" Visible="false" Text="Edit" ForeColor="#475D68"></asp:Label></div>
                                                                    </h6>
                                                                    <span></span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </CommandItemTemplate>
               <EditFormSettings EditFormType="WebUserControl" UserControlName="UserControls/CreateRequest.ascx">
                                                    <EditColumn UniqueName="EditCommandColumn1">
                                                    </EditColumn>
                                                </EditFormSettings>
            </MasterTableView>
        </telerik:RadGrid>
    </div>
    
    <div class="widget">
     <span class="widgetTitle">RFC Count By Risk <a class="closewidget" href="javascript:void(0);"></a></span>
     <telerik:RadChart ID="rdChartRisk" Height="150px" 
                    Width="300px"  runat="server" AutoLayout="true"> 
                    <Appearance>  
                        <Border Visible="false" /> 
                    </Appearance>

                     <PlotArea>
            <XAxis DataLabelsColumn="Age Range" LayoutMode="Between">
                <Appearance>
                    <TextAppearance TextProperties-Font="verdana, 12pt">
                    </TextAppearance>
                    <LabelAppearance RotationAngle="0">
                    </LabelAppearance>
                </Appearance>
            </XAxis>
            <YAxis Visible="false">            
            </YAxis>
        </PlotArea>
        <Legend Visible="false"></Legend>
          <ChartTitle>
                        <TextBlock Text="">
                        </TextBlock>
                    </ChartTitle>
                </telerik:RadChart>
    </div>
   
    <div class="widget">
     <span class="widgetTitle">RFC Count By Status <a class="closewidget" href="javascript:void(0);"></a></span>
     <telerik:RadChart ID="rdChartStatus" Height="150px" 
                    Width="350px"  runat="server" AutoLayout="true"> 
                    <Appearance>  
                        <Border Visible="false" /> 
                    </Appearance>

                     <PlotArea>
            <XAxis DataLabelsColumn="Status Range" LayoutMode="Between">
                <Appearance>
                    <TextAppearance TextProperties-Font="verdana, 12pt">
                    </TextAppearance>
                    <LabelAppearance RotationAngle="0">
                    </LabelAppearance>
                </Appearance>
            </XAxis>
            <YAxis Visible="false">            
            </YAxis>
        </PlotArea>
        <Legend Visible="false"></Legend>
          <ChartTitle>
                        <TextBlock Text="">
                        </TextBlock>
                    </ChartTitle>
                </telerik:RadChart>
    </div>  
    
</asp:Content>
