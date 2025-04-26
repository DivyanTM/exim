const modules = [

    'PROJECT TRACKING',
    'O&M INVOICES',
    'EQUIPMENT INVOICES',
    'EQUIPMENTS',
    'STAFF DETAILS',
    'CONTRACT LOGS',
    'MASTER MANAGEMENT',
    'USER MANAGEMENT',
    'INDENT CREATION',
    'FUND CHECK',
    'LPC COMPLETED',
    'INDENT APPROVAL',
    'PO APPROVAL',
    'PO GENERATED',
    'SRB CREATED',
    'IC & SR SUBMISSION'
];

const roles = {

    'ADMIN': {
        id:1,
        name: 'administrator',
        writes: [
            'PROJECT TRACKING',
            'O&M INVOICES',
            'EQUIPMENT INVOICES',
            'EQUIPMENTS',
            'STAFF DETAILS',
            'CONTRACT LOGS',
        ],
        reads: [
            'PROJECT TRACKING',
            'O&M INVOICES',
            'EQUIPMENT INVOICES',
            'EQUIPMENTS',
            'STAFF DETAILS',
            'CONTRACT LOGS',
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]

    },

    'SUPERADMIN': {
        id:2,
        name: 'superadministrator',
        writes: [
            'USER MANAGEMENT',
            'MASTER MANAGEMENT'
        ],
        reads: [
            'USER MANAGEMENT',
            'MASTER MANAGEMENT'
        ]
    },

    'DATAENTRY': {
        id:3,
        name: 'data entry operator',
        writes: [
            'PROJECT TRACKING',
            'O&M INVOICES',
            'EQUIPMENT INVOICES',
            'EQUIPMENTS',
            'STAFF DETAILS',
            'CONTRACT LOGS',
        ],
        reads: [
            'PROJECT TRACKING',
            'O&M INVOICES',
            'EQUIPMENT INVOICES',
            'EQUIPMENTS',
            'STAFF DETAILS',
            'CONTRACT LOGS',
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    },

    'INDENTER': {
        id:4,
        name: 'indenter',
        writes: [
            'INDENT CREATION',
        ],
        reads: [
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    },


    'FUNDCHECK': {
        id:5,
        name: 'fund checker',
        writes: [
            'FUND CHECK',
        ],
        reads: [
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    },

    'FUNDCHECK-INVOICE': {
        id:6,
        name: 'fund checker - invoice',
        writes: [
            'FUND CHECK',
            'O&M INVOICES',
        ],
        reads: [
            'O&M INVOICES',
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    },


    'POAPPROVAR': {
        id:7,
        name: 'po approver',
        writes: [
            'PO APPROVAL',
        ],
        reads: [
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    },

    'OTHERS': {
        id:8,
        name: 'others',
        writes: [
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ],
        reads: [
            'INDENT CREATION',
            'FUND CHECK',
            'LPC COMPLETED',
            'INDENT APPROVAL',
            'PO APPROVAL',
            'PO GENERATED',
            'SRB CREATED',
            'IC & SR SUBMISSION'
        ]
    }

}

const moduleMaps={

    'PROJECT TRACKING':['projectTracking','projectsDashboard'],
    'O&M INVOICES': ['o&mInvoices'],
    'EQUIPMENT INVOICES':['equipment-invoices'],
    'EQUIPMENTS': ['equipmentlist'],
    'STAFF DETAILS':['staff-details'],
    'CONTRACT LOGS': ['contract-logs'],
    'USER MANAGEMENT': ['user-details'],
    'MASTER MANAGEMENT':[
                            'clients',
                            'courses',
                            'designations',
                            'equipmentCategory',
                            'highestQualifications',
                            'organisations',
                            'stages',
                        ],
    'INDENT CREATION': ['indents'],
    'FUND CHECK': ['indents'],
    'LPC COMPLETED': ['indents'],
    'INDENT APPROVAL': ['indents'],
    'PO APPROVAL': ['indents'],
    'PO GENERATED': ['indents'],
    'SRB CREATED': ['indents'],
    'IC & SR SUBMISSION': ['indents']
}

