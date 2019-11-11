import * as React from 'react';
import sinon from 'sinon';
import { shallow } from "enzyme";
import { HelloWeb } from './HelloWeb';

describe('HelloWeb', () => {

    const webData = {
        "odata.metadata": "https://cpsglobaldev.sharepoint.com/_api/$metadata#SP.ApiData.Webs/@Element",
        "odata.type": "SP.Web",
        "odata.id": "https://cpsglobaldev.sharepoint.com/_api/Web",
        "odata.editLink": "Web",
        "AllowRssFeeds": true,
        "AlternateCssUrl": "",
        "AppInstanceId": "00000000-0000-0000-0000-000000000000",
        "ClassicWelcomePage": null,
        "Configuration": 0,
        "Created": "2015-05-07T14:55:38",
        "CurrentChangeToken": {
            "StringValue": "1;2;839ad0dc-5ad8-4b3f-9502-828d24286459;637090236936800000;209621772"
        },
        "CustomMasterUrl": "/_catalogs/masterpage/seattle.master",
        "Description": "",
        "DesignPackageId": "00000000-0000-0000-0000-000000000000",
        "DocumentLibraryCalloutOfficeWebAppPreviewersDisabled": false,
        "EnableMinimalDownload": false,
        "FooterEmphasis": 0,
        "FooterEnabled": false,
        "FooterLayout": 0,
        "HeaderEmphasis": 0,
        "HeaderLayout": 0,
        "HorizontalQuickLaunch": false,
        "Id": "839ad0dc-5ad8-4b3f-9502-828d24286459",
        "IsHomepageModernized": false,
        "IsMultilingual": true,
        "IsRevertHomepageLinkHidden": false,
        "Language": 1033,
        "LastItemModifiedDate": "2019-11-09T21:51:02Z",
        "LastItemUserModifiedDate": "2019-01-07T13:03:36Z",
        "MasterUrl": "/_catalogs/masterpage/seattle.master",
        "MegaMenuEnabled": false,
        "NavAudienceTargetingEnabled": false,
        "NoCrawl": false,
        "ObjectCacheEnabled": false,
        "OverwriteTranslationsOnChange": false,
        "ResourcePath": {
            "DecodedUrl": "https://cpsglobaldev.sharepoint.com"
        },
        "QuickLaunchEnabled": true,
        "RecycleBinEnabled": true,
        "SearchScope": 0,
        "ServerRelativeUrl": "/",
        "SiteLogoUrl": null,
        "SyndicationEnabled": true,
        "TenantAdminMembersCanShare": 0,
        "Title": "Intranet UAT",
        "TreeViewEnabled": false,
        "UIVersion": 15,
        "UIVersionConfigurationEnabled": false,
        "Url": "https://cpsglobaldev.sharepoint.com",
        "WebTemplate": "STS",
        "WelcomePage": "SitePages/Welcome.aspx"
    };

    it('calls getWeb on component mount', () => {
        const getWeb = sinon.stub().resolves();
        shallow(<HelloWeb getWeb={getWeb} />);
        expect(getWeb.callCount).toEqual(1);
    });

    it('sets component state to returned data', async () => {
        const getWeb = sinon.stub().resolves(webData);
        const wrapper = await shallow(<HelloWeb getWeb={getWeb} />);
        expect(wrapper.state('loaded')).toEqual(true);
        expect(wrapper.state('web')).toEqual(webData);
    });

    it('displays web title', async () => {
        const getWeb = sinon.stub().resolves(webData);
        const wrapper = await shallow(<HelloWeb getWeb={getWeb} />);
        expect(wrapper.find('h1').text()).toEqual(webData.Title);
    });

    it('has link targeted to site', async () => {
        const getWeb = sinon.stub().resolves(webData);
        const wrapper = await shallow(<HelloWeb getWeb={getWeb} />);
        const anchor = wrapper.find('a');
        expect(anchor.props().href).toEqual(webData.Url);
        expect(anchor.text()).toEqual('Link');
    })

});