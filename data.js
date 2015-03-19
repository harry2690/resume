angular.module('resumeApp', []).controller('resumeData', function($scope) {
    $scope.mydata = {
        name:"林水獺",
		email:"harrywumobile@gmail.com",
		birthday:"1987/01/05",
		workExperience:[
			{
				companyName:"聯經數位股份有限公司",
				position:"程式設計師",
				period:"2013/10 ~ now"
			},
			{
				companyName:"經緯數位科技股份有限公司",
				position:"程式設計師",
				period:"2012/03 ~ 2013/10"
			},
			{
				companyName:"精誠資訊股份有限公司",
				position:"程式設計師",
				period:"2011/07 ~ 2012/30"
			}
		],
		educationalBackground:[
			{
				schoolName:"中華技術學院",
				department:"工業工程與管理",
				period:"2005/09 ~ 2009/06"
			},
			{
				schoolName:"南港高工",
				department:"建築科",
				period:"2002/09 ~ 2005/06"
			}
		],
		technology:[
			{
				title:"程式語言",
				content:"Java , Javascript , Jquery , Node.js , Android , C# , PHP , ActionScript"
			},
			{
				title:"Framework",
				content:"Sprint , Hibernate , iBates , LinQ , Maven , Ant"
			},
			{
				title:"版本控管",
				content:"Team Foundation , SVN , Git"
			},
			{
				title:"前端技術",
				content:"Bootstarp , AngularJS , Knockout , Kendo UI , JQuery UI , Struts 2"
			},
			{
				title:"資料庫",
				content:"MySQL , MariaDB , SQL Server , Oracle DB , MongoDB"
			},
			{
				title:"作業系統",
				content:"CentOS , OS X , Windows , Android , iOS"
			},
			{
				title:"虛擬機",
				content:"VMWare , Virtual Box , Xen Server"
			}
		],
		workExperience:[
			{
				experience:"日盛銀行風控管理系統"
			},
			{
				experience:"電子發票中小企業介接系統"
			},
			{
				experience:"地方稅系統再造"
			},
			{
				experience:"中選會電子投票系統"
			},
			{
				experience:"資訊圖表管理系統"
			},
			{
				experience:"科技部系統再造"
			},
			{
				experience:"國發會揪應平台"
			},
			{
				experience:"雲端硬碟儲存系統"
			}
		]
    };
});