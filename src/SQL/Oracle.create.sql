



CREATE TABLE "ТЧОпШтРасп"
(

	"primaryKey" RAW(16) NOT NULL,

	"Надбавки" FLOAT(126) NULL,

	"Всего" FLOAT(126) NULL,

	"Дата" DATE NULL,

	"Персонал" RAW(16) NOT NULL,

	"ОпрШтатРасп" RAW(16) NOT NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Персонал"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Гостиница"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"ОргПравФорма" NVARCHAR2(255) NULL,

	"ОКПО" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧРаспОбСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Обязанности" NVARCHAR2(255) NULL,

	"ДатаСостав" DATE NULL,

	"Персонал" RAW(16) NOT NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОпрШтатРасп"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Номер" NUMBER(10) NULL,

	"Период" DATE NULL,

	"Гостиница" RAW(16) NOT NULL,

	"Директор" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РаспОбСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"РегНомер" NVARCHAR2(255) NULL,

	"Место" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Гостиница" RAW(16) NOT NULL,

	"Директор" RAW(16) NOT NULL,

	"ТЧРаспОбСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Директор"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Персонал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"КолвоШтатЕд" FLOAT(126) NULL,

	"Оклад" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧОпШтРасп"
	ADD CONSTRAINT "ТЧОпШтРасп_FП_5486" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ТЧОпШтРасп_IП_3939" on "ТЧОпШтРасп" ("Персонал");

ALTER TABLE "ТЧОпШтРасп"
	ADD CONSTRAINT "ТЧОпШтРасп_FО_4446" FOREIGN KEY ("ОпрШтатРасп") REFERENCES "ОпрШтатРасп" ("primaryKey");

CREATE INDEX "ТЧОпШтРасп_IО_6142" on "ТЧОпШтРасп" ("ОпрШтатРасп");

ALTER TABLE "ТЧОпШтРасп"
	ADD CONSTRAINT "ТЧОпШтРасп_FД_1731" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "ТЧОпШтРасп_IД_5262" on "ТЧОпШтРасп" ("Должности");

ALTER TABLE "Персонал"
	ADD CONSTRAINT "Персонал_FДол_5854" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Персонал_IДол_1959" on "Персонал" ("Должности");

ALTER TABLE "ТЧРаспОбСотр"
	ADD CONSTRAINT "ТЧРаспОбСотр__7904" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "ТЧРаспОбСотр__9225" on "ТЧРаспОбСотр" ("Персонал");

ALTER TABLE "ТЧРаспОбСотр"
	ADD CONSTRAINT "ТЧРаспОбСотр__1804" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "ТЧРаспОбСотр__8451" on "ТЧРаспОбСотр" ("Должности");

ALTER TABLE "ОпрШтатРасп"
	ADD CONSTRAINT "ОпрШтатРасп_F_3888" FOREIGN KEY ("Гостиница") REFERENCES "Гостиница" ("primaryKey");

CREATE INDEX "ОпрШтатРасп_I_7097" on "ОпрШтатРасп" ("Гостиница");

ALTER TABLE "ОпрШтатРасп"
	ADD CONSTRAINT "ОпрШтатРасп_F_9211" FOREIGN KEY ("Директор") REFERENCES "Директор" ("primaryKey");

CREATE INDEX "ОпрШтатРасп_IД_933" on "ОпрШтатРасп" ("Директор");

ALTER TABLE "РаспОбСотр"
	ADD CONSTRAINT "РаспОбСотр_FГ_3567" FOREIGN KEY ("Гостиница") REFERENCES "Гостиница" ("primaryKey");

CREATE INDEX "РаспОбСотр_IГ_9524" on "РаспОбСотр" ("Гостиница");

ALTER TABLE "РаспОбСотр"
	ADD CONSTRAINT "РаспОбСотр_FД_9545" FOREIGN KEY ("Директор") REFERENCES "Директор" ("primaryKey");

CREATE INDEX "РаспОбСотр_IД_7573" on "РаспОбСотр" ("Директор");

ALTER TABLE "РаспОбСотр"
	ADD CONSTRAINT "РаспОбСотр_FТ_2362" FOREIGN KEY ("ТЧРаспОбСотр") REFERENCES "ТЧРаспОбСотр" ("primaryKey");

CREATE INDEX "РаспОбСотр_IТЧ_386" on "РаспОбСотр" ("ТЧРаспОбСотр");

ALTER TABLE "Директор"
	ADD CONSTRAINT "Директор_FПер_9717" FOREIGN KEY ("Персонал") REFERENCES "Персонал" ("primaryKey");

CREATE INDEX "Директор_IПер_2064" on "Директор" ("Персонал");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


