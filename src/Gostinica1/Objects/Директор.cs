﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gostinica1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Директор.
    /// </summary>
    // *** Start programmer edit section *** (Директор CustomAttributes)

    // *** End programmer edit section *** (Директор CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДиректорE", new string[] {
            "ФИО as \'ФИО\'",
            "Персонал as \'Персонал\'",
            "Персонал.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Персонал.ФИО"})]
    [MasterViewDefineAttribute("ДиректорE", "Персонал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ДиректорL", new string[] {
            "ФИО as \'ФИО\'",
            "Персонал.ФИО as \'ФИО\'"})]
    public class Директор : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private IIS.Gostinica1.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (Директор CustomMembers)

        // *** End programmer edit section *** (Директор CustomMembers)

        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Директор.ФИО CustomAttributes)

        // *** End programmer edit section *** (Директор.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Директор.ФИО Get start)

                // *** End programmer edit section *** (Директор.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Директор.ФИО Get end)

                // *** End programmer edit section *** (Директор.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Директор.ФИО Set start)

                // *** End programmer edit section *** (Директор.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Директор.ФИО Set end)

                // *** End programmer edit section *** (Директор.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Директор.
        /// </summary>
        // *** Start programmer edit section *** (Директор.Персонал CustomAttributes)

        // *** End programmer edit section *** (Директор.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.Gostinica1.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (Директор.Персонал Get start)

                // *** End programmer edit section *** (Директор.Персонал Get start)
                IIS.Gostinica1.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (Директор.Персонал Get end)

                // *** End programmer edit section *** (Директор.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Директор.Персонал Set start)

                // *** End programmer edit section *** (Директор.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (Директор.Персонал Set end)

                // *** End programmer edit section *** (Директор.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДиректорE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДиректорE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДиректорE", typeof(IIS.Gostinica1.Директор));
                }
            }
            
            /// <summary>
            /// "ДиректорL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДиректорL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДиректорL", typeof(IIS.Gostinica1.Директор));
                }
            }
        }
    }
}
