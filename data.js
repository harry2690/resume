var languageData = {};

languageData.cht = {
	name:"林水獺",
	email:"harrywumobile@gmail.com",
	birthday:"1987/01/05",
	workExperience:{
		title:"工作經驗",
		tableHead:{
			companyName:"公司名稱",
			position:"職位",
			period:"工作期間"
		},
		value:[
			{
				companyName:"聯經數位股份有限公司",
				position:"程式設計師",
				period:"2013/10 ~ 至今"
			},
			{
				companyName:"經緯智慧科技股份有限公司",
				position:"程式設計師",
				period:"2012/03 ~ 2013/10"
			},
			{
				companyName:"精誠資訊股份有限公司",
				position:"程式設計師",
				period:"2011/07 ~ 2012/30"
			}
		]
	},
	educationalBackground:{
		title:"學歷",
		tableHead:{
			schoolName:"學校名稱",
			department:"科系",
			period:"期間"
		},
		value:[
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
		]
	},
	technology:{
		title:"技術",
		value:[
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
		]
	},
	projectExperience:{
		title:"實務經驗",
		value:[
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
	}
};

languageData.eng = {
	name:"Otters Lin",
	email:"harrywumobile@gmail.com",
	birthday:"05/01/1987",
	workExperience:{
		title:"Work Experience",
		tableHead:{
			companyName:"Company Name",
			position:"Position",
			period:"Period"
		},
		value:[
			{
				companyName:"udnDigital Co., Ltd.",
				position:"Programmer",
				period:"10/2013 ~ now"
			},
			{
				companyName:"Universal Intelligent Technology Inc.",
				position:"Programmer",
				period:"03/2012 ~ 10/2013"
			},
			{
				companyName:"SYSTEX Corporation",
				position:"Programmer",
				period:"07/2011 ~ 03/2012"
			}
		]
	},
	educationalBackground:{
		title:"Educational Background",
		tableHead:{
			schoolName:"School Name",
			department:"Department",
			period:"Period"
		},
		value:[
			{
				schoolName:"China University of Science and Technology",
				department:"The Department of Industrial Engineering and Management",
				period:"09/2005 ~ 06/2009"
			},
			{
				schoolName:"Nankang Vocational High School",
				department:"Architectural Engineering",
				period:"09/2002 ~ 06/2005"
			}
		]
	},
	technology:{
		title:"Technology",
		value:[
			{
				title:"Programming Language",
				content:"Java , Javascript , Jquery , Node.js , Android , C# , PHP , ActionScript"
			},
			{
				title:"Framework",
				content:"Sprint , Hibernate , iBates , LinQ , Maven , Ant"
			},
			{
				title:"Version Control",
				content:"Team Foundation , SVN , Git"
			},
			{
				title:"Front-end Framework",
				content:"Bootstarp , AngularJS , Knockout , Kendo UI , JQuery UI , Struts 2"
			},
			{
				title:"Databases",
				content:"MySQL , MariaDB , SQL Server , Oracle DB , MongoDB"
			},
			{
				title:"Operating System",
				content:"CentOS , OS X , Windows , Android , iOS"
			},
			{
				title:"Virtual Machine",
				content:"VMWare , Virtual Box , Xen Server"
			}
		]
	},
	projectExperience:{
		title:"Project Experience",
		value:[
			{
				experience:"JihSun International Commercial Bank Co., Ltd. Risk Management System"
			},
			{
				experience:"Ministry of Finance, R.O.C. E-Invoice SMEs Connect System"
			},
			{
				experience:"Ministry of Finance, R.O.C. Local Taxes Declaration System"
			},
			{
				experience:"Central Election Commission e-Vote System"
			},
			{
				experience:"Infographic Manager System"
			},
			{
				experience:"Ministry of Science and Technology Web page"
			},
			{
				experience:"National Development Council \"Join\" System"
			},
			{
				experience:"EzTocloud Data Backup System"
			}
		]
	}
};

var app = angular.module('resumeApp', []).controller('resumeData', function($scope) {
    $scope.mydata = languageData["cht"];
	$scope.change = function(language) {
	    $scope.mydata = languageData[language];
    };
});