// 存储各品牌的套盒信息
const boxSets = {
    "mard": {
        "Mard1": {
            name: "基础套装1",
            colors: ['B3','C3','D9','E2','G1','A4','B5','C5','D6','E4','G5','A6','B8','C8','D7','F5','G7','A7','H1','H2','H3','H4','H5','H7']
        },
        "Mard2": {
            name: "基础套装2",
            colors: ['C2','C13','D19','E8','A13','A11','C10','C6','D18','E3','A10','G9','C11','C7','D21','D13','F13','G13','B12','D3','D15','E7','F8','G8']
        },
        "Mard3": {
            name: "基础套装3",
            colors: ['A3','B20','D16','D8','E1','G2','B18','B10','D11','D12','E12','G3','B14','B19','D2','D20','E5','F10','B17','B7','C16','D14','E13','F7']
        },
        "Mard4": {
            name: "基础套装4",
            colors: ['E11','E4','F1','A14','M6','M5','E15','F14','F9','F2','G14','M9','E9','E6','F12','F3','F11','M12','D5','E10','F4','F6','G17','H6']
        },
        "Mard5": {
            name: "基础套装5",
            colors: ['A15','A5','A8','A12','A9','G6','A1','B13','B1','B2','B4','B11','H12','C1','B16','B6','C15','B15','C14','D17','D1','C4','C17','C9']
        },
        "Mard6": {
            name: "基础套装6",
            colors: ['H8','G15','A2','H13','G16','H9','H10','M1','G11','G4','M4','H14','M10','M2','G12','M13','M7','H11','M11','M3','G10','M14','M8','M15']
        },
        "Mard7": {
            name: "基础套装7",
            colors: ['P18','P16','P3','P12','P1','Y7','P7','P17','P6','P13','P9','P11','P4','P5','P15','P14','P2','R12','P23','P22','P21','P20','P19','P8']
        },
        "Mard8": {
            name: "基础套装8",
            colors: ['P10','R11','Y2','Y3','Q2','Y4','Y5','Y1','R3','R4','R5','R8','R9','R2','R1','R10','R6','R7','D10','R13','Q5','B9','C12','D4']
        },
        "Mard9": {
            name: "基础套装9",
            colors: ['H17','H18','H19','E16','F16','F17','D23','E24','E19','E18','E17','E20','B24','A16','A17','A18','F24','F23','A24','A22','A21','F21','F22','A19']
        },
        "Mard10": {
            name: "基础套装10",
            colors: ['A26','A25','A20','A23','G18','H21','B26','B32','B31','B30','B27','B29','C22','C23','C24','B28','C25','C27','H15','H20','H23','H22','C28','C21']
        },
        "Mard11": {
            name: "基础套装11",
            colors: ['F15','F19','G20','E21','E22','D26','F25','F20','G19','F18','G21','E23','D25','D22','D24','C20','B21','B25','H16','B23','C18','B22','C19','C26']
        },
        "MardA": {
            name: "基础套装A",
            colors: ['B10','C2','C3','C13','D16','D17','B6','C4','C10','C17','D1','D11','C15','C11','C5','C6','C7','D2','B19','B7','C8','C9','D3','C16']
        },
        "MardB": {
            name: "基础套装B",
            colors: ['E12','E2','E8','D19','D8','D9','E6','E4','E3','E9','D12','D6','E5','E10','D5','D13','D20','D18','E7','E13','D21','D14','D7','D15']
        },
        "MardC": {
            name: "基础套装C",
            colors: ['C14','B20','C1','B18','M5','M6','B3','B16','B13','B1','G13','F10','B5','B4','B2','B14','G7','F11','B15','B12','B8','B17','B11','G8']
        },
        "MardD": {
            name: "基础套装D",
            colors: ['A15','A3','A11','A9','F14','F12','A4','A13','A6','F1','F2','F3','A5','A10','F7','F13','F9','F6','A8','A14','F4','F5','F8','F7']
        },
        "MardE": {
            name: "基础套装E",
            colors: ['E15','E1','E14','E11','H2','H1','A12','G3','G2','G1','A1','H12','G6','G5','G9','M9','H3','H4','G14','M12','G17','H5','H6','H7']
        },
        // 可以继续添加更多套盒
    },
    "mixiaowo": {
        "MXA": {
            name: "咪小窝基础套装A",
            colors: ['1','81','131','38','89','142','26','28','121','17','35','74','27','25','39','3','14','137','5','40','7','71','111','29']
        },
        "MXB": {
            name: "咪小窝基础套装B",
            colors: ['15','49','140','103','90','75','133','109','83','123','134','6','107','9','33','97','70','12','73','41','108','80','122','4']
        }
        // 可以继续添加更多套盒
    },
    "huangdoudou": {
        "HDD1": {
            name: "基础套装1",
            colors: ['B3','C3','D9','E2','G1','A4','B5','C5','D6','E4','G5','A6','B8','C8','D7','F5','G7','A7','H1','H2','H3','H4','H5','H7']
        },
        "HDD2": {
            name: "基础套装2",
            colors: ['C2','C13','D19','E8','A13','A11','C10','C6','D18','E3','A10','G9','C11','C7','D21','D13','F13','G13','B12','D3','D15','E7','F8','G8']
        },
        "HDD3": {
            name: "基础套装3",
            colors: ['A3','B20','D16','D8','E1','G2','B18','B10','D11','D12','E12','G3','B14','B19','D2','D20','E5','F10','B17','B7','C16','D14','E13','F7']
        },
        "HDD4": {
            name: "基础套装4",
            colors: ['E11','E4','F1','A14','M6','M5','E15','F14','F9','F2','G14','M9','E9','E6','F12','F3','F11','M12','D5','E10','F4','F6','G17','H6']
        },
        "HDD5": {
            name: "基础套装5",
            colors: ['A15','A5','A8','A12','A9','G6','A1','B13','B1','B2','B4','B11','H12','C1','B16','B6','C15','B15','C14','D17','D1','C4','C17','C9']
        },
        "HDD6": {
            name: "基础套装6",
            colors: ['H8','G15','A2','H13','G16','H9','H10','M1','G11','G4','M4','H14','M10','M2','G12','M13','M7','H11','M11','M3','G10','M14','M8','M15']
        },
        "HDD7": {
            name: "基础套装7",
            colors: ['P18','P16','P3','P12','P1','Y7','P7','P17','P6','P13','P9','P11','P4','P5','P15','P14','P2','R12','P23','P22','P21','P20','P19','P8']
        },
        "HDDA": {
            name: "基础套装A",
            colors: ['B10','C2','C3','C13','D16','D17','B6','C4','C10','C17','D1','D11','C15','C11','C5','C6','C7','D2','B19','B7','C8','C9','D3','C16']
        },
        "HDDB": {
            name: "基础套装B",
            colors: ['E12','E2','E8','D19','D8','D9','E6','E4','E3','E9','D12','D6','E5','E10','D5','D13','D20','D18','E7','E13','D21','D14','D7','D15']
        },
        "HDDC": {
            name: "基础套装C",
            colors: ['C14','B20','C1','B18','M5','M6','B3','B16','B13','B1','G13','F10','B5','B4','B2','B14','G7','F11','B15','B12','B8','B17','B11','G8']
        },
        "HDDD": {
            name: "基础套装D",
            colors: ['A15','A3','A11','A9','F14','F12','A4','A13','A6','F1','F2','F3','A5','A10','F7','F13','F9','F6','A8','A14','F4','F5','F8','F7']
        },
        "HDDE": {
            name: "基础套装E",
            colors: ['E15','E1','E14','E11','H2','H1','A12','G3','G2','G1','A1','H12','G6','G5','G9','M9','H3','H4','G14','M12','G17','H5','H6','H7']
        },
        // 可以继续添加更多套盒
    },
    // 可以继续添加其他品牌的套盒
}; 