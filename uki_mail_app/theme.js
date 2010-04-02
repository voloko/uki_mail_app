(function() {
    var defaultCss = 'position:absolute;z-index:100;-moz-user-focus:none;font-family:Arial,Helvetica,sans-serif;';
    
    uki_mail_app.theme = uki.extend({}, uki.theme.Base, {
        imagePath: '/src/uki-theme/airport/i/',
        
        backgrounds: {
            // toolbar button
            'toolbar-button-full-normal': function() {
                return new uki.background.Sliced9({
                    v: [u("button-full/normal-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACdElEQVQ4T52UWU/bQBhF5/8/tC9UKhUPrdRKFFHaLAQIjp0F7Gxk32wTmv6S2znjBFIWEfpwxTDfPQd7sG3q9bqei+8H+n58ov2DL3q/t+/Cmj1mL3GmVqtpO77v69vhkd59+KTjXEGdm4GWq5ULa/aY0aH7mDfValWblC/K2vt4oOOfeSdIl7+1SG4VJ0sX1uwxo0MXZtthgiAQKZcv9fnroa7CluI0g/kZp3eKb9dhvTWjCwO78Tghl57Pl9S4bmo6j/+VPRE+SOnCwOJwQhal0rn8oKHJbKF5nGa3uC18kuwI6MLAOod1Gc+rqFA8V38w1myRPJxZ+krWZwoDiwOXycwNjadz9xcz4W6hCwOLA5cVXihsdu9vd5Fk0t2S3t82DlyGS+32hm5ztkhdKO2STR8WBy6Ty5+pZ8+Ay57MYvufS94UGFgcuMyPk4Lq1y1F7a6a7Z6iztviGMviwGV+2Weobp8lBq3u4L8CiwOXOTsrK6iHbtDpjdTpj9TtD3cKXRhYHLiMV/FV9qpucDOYZBnumHUfFgcuU6lUVCyV7eZQ/dFMg/Fcg8mOsV0YWBy47HNYUrXWUFALNbSl8TTWaJZo/Epcx3ZhYHHgMqenp87s2Utu2cOdzFNNY/tKvRI6dGFgceByQhKFkS69wJ3HIrnTPLXfwhfiZrZDFwZ24zHFYlGEX1qttv1y1BW1biywVLJcKbn7o3Qd1uwxo0MXBnbjMYVCQZuwEUWRfS/bCqrX9nb67pzi25ULa/aY0aELs+0w+Xxej8N3rdu1b46FGldNe+BXLqzZY5Z9lJ+yJpfL6bkw9DxPYRg6AWHNHrOXuL9Q4QqDB1Un4AAAAABJRU5ErkJggg=="],
                    m: [u("button-full/normal-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAiUlEQVQYGa3BMU4DURBEwdczHREgDu7ECRdcgYitdchv+DdgNVTpdn8Pv1bCVhJX6ePzKxAksSUBxN8EED6fT6YsianiHzhhzBCmTMKUw5yTMOW1wpQf58mUS8WUu8WUVc2Uu5spdzVT7i6mXNVMubuYcqmY8nEcbOt7sVUXV/nt9YUtCZskrvoBSb0pdiud7ZQAAAAASUVORK5CYII="]
                }, "0 10 0 10");
            },
            
            'toolbar-button-full-hover': function() {
                return new uki.background.Sliced9({
                    v: [u("button-full/hover-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACZElEQVQ4T52U227aQBRF5/+l9imVEqlV1aqtgBBc4wvYHl+xPeAY0iRVfmf37CGoFEFFeNhimLPXshMPVlVV4ViyLMdwPMH1py94f3VjwzX3ODvFqbIssZ8sy/B9MMK7DzcYOh7qtsPzy4sN19zjjB12D3lVFAV2iaMYV9cfMbhz8fT8gv7hEcv7NcxruOYeZ+ywS2bfofI8BxPHCT5/GyDJF1j1DzBd/yrbyOc22/XazthhlwzZnccKeeuTnwHmukBtOrSrXqDtHR0LZ+ywS4YsHVbIhR/MEMxTLOoVmmVvy1vpVvxv/s7ZJUOWDrqU1ikcN0RWNqiaTq66LZ4TdsmQpYMuRbM/S1AsjB0u2vs3hQxZOuhSrjfHPCmQVy1Kuf2qeVvIkKWDLjVxAsSpnL+ylYFBLlcrzgy7ZMjSQZcaTzxE8qR0VkPnDXTRIj0z7FpGWDroUl9/jDAYuxjeTTGSjUtClg661GDk4FY2b+UsjS8MWTroUs40tBuO/EMdP7oswlqHuFQUa/niw5XH7s3Si0KWDrqUTlNrD6IMs6TETJfyczov7JIhSwddKgxDpHmJaZggzhoku6d3RtglQ5YOulQQBEjFHEQponSBggdVTn9Z/z/ssEuGrHWIywoZ0xqEcuu6NKiXa8kG9epEOJMOu2TI7jzK930w/LJadXLiK6RSbLtfMP0TlgfhHmfssEuG7M6jPM/DLtwwxqCRV30sp7+QP810j+g2v2245h5n7LBLZt+hptMpDsP3Wt/Lu1CuXi6W8jOrbbjmHmfsHGOV67o4Fg611mjb1goYrrnH2SnuDyOpxMgv4mmjAAAAAElFTkSuQmCC"],
                    m: [u("button-full/hover-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAmUlEQVQ4y82UsQrDMAxEJUteOhX621my9NdK6Tek4HSOr0PqEmgSCrohNxlxPE7CnHb9FfJRxfxMqrKlNY/e7o8vpM2BTcaqx8v4kqiSEOQiiEMAQpJacRAIUBlJCJBpIqwzPIc4JKX4f3Nzj0PcCJCcGUk8E5IwbmL5KIc1szhkLGXuzEVx6k5RoxWQqjSXX86nH8M/kKXnDbaGN3Y1p/buAAAAAElFTkSuQmCC"]
                }, "0 10 0 10");
            },
            
            'toolbar-button-full-down': function() {
                return new uki.background.Sliced9({
                    v: [u("button-full/pressed-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAACd0lEQVQ4T52Ua1PaUBRF779vHbVT1IJj0IIMjwTI8yaSB+GhgljqtOMP2j37tjjWQSv9sGau5+y9TJxr1Hw+xzbKcgJ7METtvIGDk1MDz5xx91pPzWYzPKcsS7R7Dg6PTzEING7u7vHw49HAM2fcMcPsy76aTqfYkKUZjk/rcNwQDz8fUUxvEKdjofzD2My4Y4ZZdp471GQyAUmzDOetDkaFnMsZ9Oi3KMn+hjPumGGWHXY3HiMcj8dodfvoDQMEcYboqngSboM7Zphlh106jJB/h4EXouP48KKRBPMn4Vswwyw77NJBl8rzAo1OH31fw9fydEn+JH2b3GTZYZcOupTrh2j1hhj4iSxT8xok/AebHDvs0kGX6vZdtB1PhjHccGRewYvSdzIyHXbpoEs12w7atg/H0/Losfltu8AOu3TQpaxGRx7XFXsIexj9F+zSQZfal1v/4XMVHytV7FVq2DvaEemwSwdd6sRqYP/kDAdVC4eG+o5YpksHXarRdfDp7CsqVhOVehNH9cudYIddOuhSgU5wfNHCF3n/arOLGrnsvQ/JssMuHXSZi33W6sHqDGDJXarb7k6wwy4d5mInSYI4K3DRddEcarQ8Er8TbTrs0kGXiuMYhfxj24FcTrlXPZ3DjoWkeBvJMMsOu3TQZYTkdrGEHaboS3iYz+GS4hVkxwyz7LC78SitNQh/WK5W8OXz5KZTRJMFotnddmTHDLPssLvxqCiKsIGDxXKJyc0SXjZDKEU9X+Hqdm3gmTPumGGWnecOFYYhXsLv2rf1d1wvV8iu5UnLawPPnHHHzLauCgL5Sm+By6IosFgssF6vDTxzxt1rvV9j938ICnFl4wAAAABJRU5ErkJggg=="],
                    m: [u("button-full/pressed-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAXCAYAAADtNKTnAAAAp0lEQVQ4y83UwQoCIRAG4P8XdS6deoDet2OHniuIHqBDUfQCUaDToVmWZQl2VyEHVBD8RkWH291eAcA5BwBQ1cE4JXg4nhRqiwjw243jl0nA3+4Py2xzxOzwXVpSe3ouMj671kDwLyTnciTlCjtJKTWCnK+XcsT7UI6EGFtBpAIiUcqRKNLKnYQaiL0TtTrCJUXp/XraYivQS5DNegUA6P4QyUGbUvk/4aM9dYCyVGwAAAAASUVORK5CYII="]
                }, "0 10 0 10");
            },
            
            // left
            'toolbar-button-left-normal': function() {
                return new uki.background.Sliced9({
                    v: [u("button-left/normal-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAABwElEQVQ4y3XTyY4TMRDG8X9VO8t0OlFWFgkhEGeG5SG4cOCd8xhckDjMwASSzKST6bjtLg4dyEpJvlg/l0r6ym46nRoXKoTIbL5guVyxKQrKEHBmxzbGyO3dL37+XvLyxXM+fnjHcNTncb05xn7r+frtO8+ePuHL509U0YgxEnwkP8RlGbiZzXl//ZbJZEzpAyKCiILUzRyAmVEUJW9ev2Iw6GNmiAj/1K5cDT1Zt8tg0EdVkROEgRm4qjJixR6KHKvDzt6XdNIOruEOoJ06zAwHQju9OoJ2OsZfHCuj2WzsLuojYpdxVRmqiplRVRUigl3I1MxwIQTy9YZGI0FQTLhY+WaNS1wCGIIiqvzHoiK4VsMRY4W0FNU6LeF8DlXFNZqO0ns0y2rMWXB7LBjee8D2oVzCSYLbbrdknS75as1wNEBFMTkLnES13o0YPGYJxeaRTreL6jlWTeqtK4qC4WDIw8M96hzdLDvrniS63+f5Ys54PGF1vySUZb1YSQK7R6IH2MyYze4YjUaYRW5vfpCmKWknpdlq1WMcfqv6wYwsy+j1eoRQslwsiDEQYjz/sACr1Yo8z+vOacpVu41zjj8Dq+vM/h7p/wAAAABJRU5ErkJggg=="],
                    m: [u("button-left/normal-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAaElEQVRIx93Uuw2AMAwAUf8qCsRsSBTsREPDgt4AOW3MFlfgBZ5OiR3X/bQAE+exCwLVGAykqgwk0ES3UEUNQVBSNPdGUNGcEPRWMZCpMZA7dBnUnCqiIK4I+gz2vyJqjzKTgbZ1QaAPxYQYzEAnGikAAAAASUVORK5CYII="]
                }, "0 1 0 10");
            },
            
            'toolbar-button-left-hover': function() {
                return new uki.background.Sliced9({
                    v: [u("button-left/hover-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAABx0lEQVQ4jXWTzU7bQBRGz525/olxgSYgUdQ9QuortLu+OI/RTaVKVSvSxgQb23HGc7sIkEDNt/JIx2fufJrRm5sbYyIhjCxXFdW6pu16hmFAzV6y4zjy6/YPv/9WfLy85NP1NSenJfV9/RIeNgPfvv/g7Pycr18+M4QtIQSah4679XoPb7eBn8sVV1dXHL8reehaRARDEMAMFMDMaNqBDxcXzPKMcRwREQCEncxgZ267DVmec5TPEHE8CXjEn6IxGttgnJQ5JsLheXff9rzQfjOQpAnO7Y02UWY00DEKWZo8QrY3vYpFQ8cw4txu+xgjyOGUB+YY0WgRMyOOEURAZBIeY0TbviPEiIg81zWVu6pCU03wzoFzk8anOOfQLM8I0VDvd2O8Ee8VLfKU+7bHqcfh3oRVPeq9AII6j3P+zTa8V3TYbJiflDx0A0mSIW66DU308dbFgPcOs0iqKSaCswkzQN/3zN/PqeqOoEqepbyeR9Xv7/OqWnF2ds666dkAs9kMOajTe93DZsZyectisSCap2ka0jQlSzO8erz3L5/V7oclZVkyPz5mO0aGTUdoAyFs/3+wAHVd0zQNRVFQFAVHs5zFack/i6zxYmg7DrMAAAAASUVORK5CYII="],
                    m: [u("button-left/hover-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAkElEQVRIx92WPQqAMAyFkyZdnASv7eLi1UQ8g0J1ts/B3wOUN/hNhUI/XtKWaNv1kIuMcxlUpSQQER3G6RHd5wNSHE/rJgyCkPCzggQRQEqUM34mAjIrEUm076TSzcvMEYXAebNu7hyRG0kUIyuRR1IiVo8s/u0ymBlHtKb0DBD3sKCFhpPv5+ZNXb0bhUVfDj/5LnR1f9QdAAAAAElFTkSuQmCC"]
                }, "0 1 0 10");
            },
            
            'toolbar-button-left-down': function() {
                return new uki.background.Sliced9({
                    v: [u("button-left/pressed-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAAB2ElEQVQ4y3WTy24TQRBFT9V099hjBxELkgUhLIAV4guQkPj1/AUrJBQR8Csej4Mzj+5i4TixHVNS7U7fut11W66urowj1XWRyXzOvKy4W99jMeHM9tkYIzfjKb8nc95dXvD501uKXp/pbLoPN3XD9x8/OT8749vXL8xvS8qyoixXlOXiCW7aluvxlI8f3iOq/LoZIyKIyEbJDAeQUmI8KxkUA+q6RVUfoe1gMzbKt8s7ssyThxxVebS1a9HM0BgTq3WNDw4RBQMwzPY7kXDV3V8yVQQFjGSAgXDwoglc3XaoPoDJEDFAOKyYEq5pOpwLJDMsReQICJBixDVth2aO2KW9yz3baIy4RbWkWywQYaP6H361XOL6vR7rukF0a+A4rd7hhsOCxoxMFLbqR8r7gDs9GVKta1SzzXoBRI7AHlfkgdx7JHOgO1k4qBByXNs2vDl/xZ/ZkswHVI/7vg9hk408EwZFTmdC5vzGxcGEEMImdfX9PRevR1xPl6gK6sOD9x3PIaDboCxu51yev8RniqSEdw7vw077JzilxGwy4exFn9NBTte2WEqICM45nNuBtwemkwnWrLkYDTntZQSJdPUaVXn+YQGqqmK1WlEUBcOiYNTv40Yn/AMQAvxPIRAzswAAAABJRU5ErkJggg=="],
                    m: [u("button-left/pressed-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAfklEQVRIx2PpnDj1PwMdAIuboz0DA8gqRiJUU+AklucvXjHQxUfEeYUKFv3//3/UIjIt+vePPhb9/UcnH/39+3eYWfTg6RP6WMTCwkofi1jZ2IabRex0soidjZ0+FrGxsw+3OGKll0X0yke/fn6nj0VyQjwoAoyMmFU7NeosABiuJsuhWi5rAAAAAElFTkSuQmCC"]
                }, "0 1 0 10");
            },

            // right
            'toolbar-button-right-normal': function() {
                return new uki.background.Sliced9({
                    v: [u("button-right/normal-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAAB0klEQVQ4y21S227TQBScvdiO4xjstoB4QURIvECqfidPvPBPVVWpEmp5ByouTWhD4jjJ+rKcs05C6nitY1v2zOzsnCM+fPxkPa3R7/WQJDGeHaXQWqFrieubLzaM+rj/M8XX2+/4dvsTL44TvHx+AqUek8T5xaVNkxSWLv4plcDV1Wf8+n2Ht8NX8AN/B5bNXUAIibquUZgSo/fvcHY6wo/xPYwpYK11JVuuiCTcjzRN8Gb4GqtVA3aa7mkPKJBSOsIgjolg9pXtXm0I4j+hqkEWLSsToF0bEhO0pxH1I+fdgW1L2+52awi9fujM6e1J22v/k+97ZMU2YPbTtXaRSekwOssX0L7fCRZ8BFD2RYWyLKEln1pIdKOpan4poWheNG+hlDi0wEjbYCvKLqBUHFhI1WkBG43CGHg+g2l42tO1Ta45fEUZG4QB2VBso6XsRBloa2TzBQZRiHwxZxusLA/AlqJaEbAqDDWmaiJkIBO2xf4VpbNcLjGb/aVWBzRIKyeihUtDNs3lrasKDw9TLCn/J3GEyWS867Czwd0x6zX5ypHnOYKeh5BqPL57NAp6Np0in89JXcPTEvEgoO1nyLLsICB9cvTUtZLjYQArdw0Wr3/Z9/0CcqEqewAAAABJRU5ErkJggg=="],
                    m: [u("button-right/normal-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAhElEQVQYGb3BsQEBARBE0b+7E0noTSBQkkSiQFcCJzUCAQUw7+l0vth8dBX/oONhzzfbvBW/YaDQfX2QoKoiQYTIJkJgEoRNgkyGbJOg59Mk6LauJKirSdBMkaDqIUEzQ4KmhwTNNAnqHhI00ySoq0nQcl2wDQYauhqKn9Nuu+FbVfEPL+gFIdGp1E0bAAAAAElFTkSuQmCC"]
                }, "0 10 0 1");
            },
            
            'toolbar-button-right-hover': function() {
                return new uki.background.Sliced9({
                    v: [u("button-right/hover-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAABx0lEQVQ4y32SzVJTQRBGz8z0/QkQkQQpKEvU8jl057u5cuM7WfoCLly4AqoQpCBckty5M90ubhJBErrqm02f/qa7Z9ynz1+sLEu2BjV7u0NejPYQCawL9/Xbdxs+G3Jz3XB6fs7J2RmH4z2ODvYJ4WGRv765obmbIUXg3ZtjPn54Tygqfvz8RTtvMbOVxAwcDgNSSnRdx9vXx4xHI05OT3l5MKYopHc2AGyBAzhyzgzqiqPDQ5ppxKzPeQCzpWyVcM6zXQ+o6prprG/HY4bqUvcLwZxjMKjpUp8XNVA1NoX3nqIsmLcRMTXMdC24bE2koJ1nRFVRfQzb4jAD7x05ZSSrkrNtgHvazFBT5OrP1ZM9LzcUY4t47/Heb4YBVCmlQEIQgghPWJOAqq4QkYCEzbCikBNbddU7L99+3TZUMxFHCA6RQhAp1sKmRtdFRrs7tLO7hfN/PasDZ0bbRkLwoKn/GyKBUMg/iVCEQMpKTh2j4Rbz+Rygd14O2F+tzGYzNHWMn+9weXmx+okSQsB7T06ZNrbEGNmuS3wJFxe/VyCApNRxO7lGglCVnp26ZjKZ0DTNo6Hl1dE+KSVijNzdNkyn0wdu9+Mv25oPTSfSJYAAAAAASUVORK5CYII="],
                    m: [u("button-right/hover-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAjElEQVQYGb3BMYoCURRE0Xr9708mElyTILg1k0lmlwqtsa9ExVlBU+dw/v2zNta2XpYqfXE6HrS1Kr3Z+sd6uysBhSBZCdiKoNtKoNtKwG4l0N1K4PGwErhcL0pgWRYlMEAJMFACc6IEYCqBCUpgTJQAAyUwxlACt3XV1mzrrUqlD/a7H23Ntl6qSl9PqVQpzP9kSucAAAAASUVORK5CYII="]
                }, "0 10 0 1");
            },
            
            'toolbar-button-right-down': function() {
                return new uki.background.Sliced9({
                    v: [u("button-right/pressed-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAXCAYAAADduLXGAAAB0klEQVQ4T32SvW5TQRCFv/137BgnjkMA0QGRkJB4ACQkno+KhteiSgEFDQgTx4njOHZyd+/uUNgO18HhSCNt8c2ZM6tRHz99FmU0nZ0W/V6Xw34faw3bZN++ec3gYMDi9obfpyO+nHzlyWGfp48HGLPZpMfnE4anZ0ynM/Z6e3x4/w7nW5x8+051WyEid6URQSlQSlFVkV/DEb29Hq9evuDHaEwV419YBNa1VqwSVZXotDuMzqeUUpYxmmOk0aG1IviAMY7J1XzpXCj82yAgoJTGecv1TUXOBUsBWY1ZSxovhcZozWy+wOZSyKURuAEuUwlaa6pUY0vO5Jy3wCCsYokipoSt/wMDlCIUKcRUY38Oh1zO59tJWbuDNRqrncVatx1GEECKsBM81jmP8/5hVCBLYXe3jXXObYdl5SqCLpn97i7W+4ALDziLQBEk17SDxzrvCT5sQykFcowcHQ1IKWK99/hwD5blD+Q60WoHglFUSZbOG5mXO1FSRGnD88EjLicXAKsFXQMuhRQjzmiODrpcjMd312itdVhryTlTcianxH4nEAycn51tnK3VWlFXNwRn2GkZWt3A7GrK+Pqa+7LHzwbUdU2MkcV8xmSx2HBr6g9L/hlPJucDyAAAAABJRU5ErkJggg=="],
                    m: [u("button-right/pressed-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAAmklEQVRIx2Psnjz9PwMS+P//P1Y2pYDx3IXLENMYoQIIBn5AihuAZrE8f/kaVYyRgSaABdNg2tjEghkN/2llEW0MHkCL/v2jj0V//9HJR3///h1mFj14+oQ+FrGwsNLHIlY2tuFmETudLGJnY6ePRWzs7MMtjljZ6JWPWNCqPRpVfH9+fker9mhkkRQ/F1qbgRFOI7NxtZSIBQDHcS98n02qWAAAAABJRU5ErkJggg=="]
                }, "0 10 0 1");
            },
            
            // mid
            'toolbar-button-mid-normal': function() {
                return new uki.background.Sliced9({
                    v: [u("button-mid/normal-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAXCAYAAAAhrZ4MAAAATUlEQVQIW2PpmjD1PwMQsHi5OjKAGV++foMwGKAAwfj/H1PkP0HGl29fIQwmRkYog4kJncHMDGEwI6RgIsxQEUYMqU8fPkAYIkL8YAYAr+gazL6h6nwAAAAASUVORK5CYII="],
                    m: [u("button-mid/normal-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAAiElEQVQYGc3BoVIEARBDwZeZKATFf2Mw/OAJQMNiN1RhEJzeSreeX14T/huJq+nt/SPckYQ/4gr+Or5pYUm0GIo4oYYhtDAJLRx6OAktfJ6hhT+PgxYeDS28K1pYs7Tw7tLCO0sL7w4tPLO08O7QwqOhhW+3GznDrwACBKMBcSk/PT5wjySu9gMKwyN3ltbnfAAAAABJRU5ErkJggg=="]
                }, "0 1 0 1");
            },
            
            'toolbar-button-mid-hover': function() {
                return new uki.background.Sliced9({
                    v: [u("button-mid/hover-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAXCAYAAAAhrZ4MAAAAW0lEQVQIW2Pp6Jv8nwEIWOyszBjAjA8fP0IY/8ESIAYDlMEAZ0DlWP7B1fyDifz7B2H8hTHevX0HYTAxMUEYzMwQo1hYWJjRRVhZCKphZoaK/PnzG8KQlRQBMwDxCRzMOh3CMQAAAABJRU5ErkJggg=="],
                    m: [u("button-mid/hover-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAAdklEQVQYGc3BMQrCUBRFwUP++Y2V4JoEwa3Z2LjLCIl13rN0Cd4ZH89XE6AB77crKdz2DykkiNCksJsYVjUprGpS2F2ksKpI4XE0KVzfKylcloUUDiWFDknhnJJCnaRwKikcU1LokBSOMUjhvm38U/Pj5XwixRdnPSDKXAN+9AAAAABJRU5ErkJggg=="]
                }, "0 1 0 1");
            },
            
            'toolbar-button-mid-down': function() {
                return new uki.background.Sliced9({
                    v: [u("button-mid/pressed-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAXCAYAAAAhrZ4MAAAAY0lEQVQIW13KMQ6AMAhAUdoAXsDJA5iYmHhQJxdPaNJF4wUsVQs4yMLLhzAva4FncBoHqNiPUwGlKGy/sCIg9iN2ymJFclZcji0lRSRUELGDFMyNFWYv/CvfM6IhxqDou7biBpSbHMl9F6bdAAAAAElFTkSuQmCC"],
                    m: [u("button-mid/pressed-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAApElEQVRIx2Ppnjz9PwMW8P//f7x8WgAWZ1sbBI8RmcmIIUYUoMDNLM9fvsYqwcjIQHfAgttS+ruGBXdS+D8QjqG/pUPEMf/+DR7H/P03iELm79+/o47B6pgHT58MHsewsLAOHsewsrGNOga7Y9gHkWPY2dgHj2PY2NlH0wx2x7AOIscAAY6m1QA0rv78/I6jaTUAjpHi58LRBmZEYaPzCfUmyAEAxG8szbIQ5CAAAAAASUVORK5CYII="]
                }, "0 1 0 1");
            },
            
            
            // panel
            'popup-normal': function() {
                return new uki.background.Multi(
                    new uki.background.CssBox('opacity:0.95;background:#ECEDEE;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;border:1px solid #CCC'),
                    uki.theme.background('shadow-medium')
                );
            },
            
            'panel-dark': function() {
                return new uki.background.Sliced9({
                    h: [u("panel/dark-h.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAECAYAAABodtTSAAAAIklEQVQYGWN89OjRfwYKAeOFCxcoN2T58uWUGxIYGEixIQC2uQv/2FmjnwAAAABJRU5ErkJggg=="],
                    m: [u("panel/dark-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAABCCAYAAACxdz2jAAAAQklEQVRYw+3SQREAIAwDwT7q31olBRHwAGYjoHO5pmcmtZmuA+kkhQQJser85YRYTt5y4jt2YiecEItEHTtBcv2RBQSZeQAFfY4LAAAAAElFTkSuQmCC", false, true]
                }, "2 0 2 0");
            },
            'panel-light': function() {
                return new uki.background.Sliced9({
                    h: [u("panel/light-h.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAABCAYAAAAFKSQHAAAAD0lEQVQImWO4cuXKf1IxAKwwLUBaex9CAAAAAElFTkSuQmCC"],
                    m: [u("panel/light-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAWCAYAAAAb+hYkAAAAMElEQVQ4y2P8+/fvfwYSARMDGYDl////w00TeQHx79+/wRwQ3759o09AjGoa1YQKAFiCG/x9cnwFAAAAAElFTkSuQmCC", true]
                }, "1 0 0 0");
            },
            
            // text field
            'input': function() {
                return new uki.background.CssBox(
                   'background:white;border: 1px solid #999;border-top-color:#555;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;-moz-box-shadow:0 1px 0 rgba(255, 255, 255, 0.4);-webkit-box-shadow:0 1px 0 rgba(255, 255, 255, 0.4);box-shadow:0 1px 0 rgba(255, 255, 255, 0.4)',
                   { inset: '0 0 0 0' }
               );
            },
            
            'search-input': function() {
                return new uki.background.Sliced9({
                    v: [u("search-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAADJ0lEQVRIx52WSUtrQRBG+286ElciggiuXAiiLkRdKThtVIjgAIrzPCMqKLgISQQRFRUUnHEevsepR4er75nkeqGg0131nb7V1XXjVlZW9D+bnZ1VZ2enGhoaVFNTo+rqatXW1qquri6t4UsMsWj8pO+Wl5cVtLm5ObW1tamxsVG9vb1aWFjQzs6O4vG4EomEkslkWsOXGGLRQAvN7xy3tLQkb2NjY2pqalJ/f792d3d1enqq29tbPT096eXlRa+vrxkNX2KIRQMtNNEOslLgiYkJNTc32/jk5EQPDw96f3/Xx8eHPj8/le2DLzHEooEWmmjDSIEXFxctFa2trVpfX9fl5aXtPAws3SbQQhNtGLBgGrirq0vz8/Pm8Pb2ZgHYxsaG2tvbVVFRYdbR0WFzYTOAJtowYBl4ampKfX19Oj4+/vKmIyMjikQiKigoUF5enhlj5lgLC0cbBiyYLhqNamtry87Di/FWhYWFKikpsR1ub2+bMWaONXzCph0GLJiOHRweHlo6eCiMlpYW5ebmqqenR9fX1xaAXV1d2Rxr+OAb5oEBC6abnJy0/HsRqrG0tFQ5OTl2L4NnTrqYYw2fsGD8YcF0q6urX9IMiHQifnBw8OUsGTPHGj5s8jfphulmZmb0/PycAiBGx0F8aGjoHzBzrOHjjycMGNb09PTfqn58fEwBSAebQbysrEyjo6M6Ozszo5qZY43537wxLKtq3oAWFwTzu7u724qICi4qKjJjzBzgyspK3dzchAajDdMNDg5aWwsWCimkgumv9fX1Ki4uNmM8MDCg8vJyu9dVVVUmFKa4YMF0iG9ubtpHIPiQRkTPz88tzTT9i4sLq8r9/X2D5+fnG/zu7i4rMAxYMB2Ne3h42ES/Xw/f7MkAxtifk4eTfppLNm8LAxZMA7MDmnfwWmU6Kz5/wPnYZ4rz14geDcvA4+PjwqhY0hCs8ExwUod/ukbiM0SLheF5dsbeuCJ8vjjbbLtSuk36G8JfHaBBlgMWNBxoaXt7e7q/v7ez9X8GsjF8iSEWDbTQ/M5xTP5knMXa2ppisZi1yqOjo4yGLzHEptP+A2XnG0kH7B78AAAAAElFTkSuQmCC"],
                    m: [u("search-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAWCAYAAAD5Jg1dAAAAMUlEQVQoke3KsREAMAgCwLi7Q9KyhgW4Am3u/Pqru/0CBSCLM5NF2xcv/hclZZFkFBfzW1Vt2gDiogAAAABJRU5ErkJggg=="]
                }, "0 10 0 20", {inset: '0 -10 0 -18'});                
            },
            'search-input-focus': function() {
                return new uki.background.Sliced9({
                    v: [u("search/focus-v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAEMUlEQVRIx7WV+09TdxyGz5+6DEQ3Zc4lu6EycaDsBltwihMo1FIKvdCettAWOL3RlrYC5eIER3DB7ILb4mKWbb+94znLMQy0g0i/ySf8cD7v87x8OeEY+Xxe/zfpbF7JdEHBmZLGkmV5EvWHHXbJkD2Kw8jlcnrZWJmcEta8xpMlDcSr6gkv6lpwWVf99YcddsmQhQGrnss4SoFPQou6NF5Tq2dNp9331TRcf9hhlwzZoxQystms9s9cOitzJi/3VEmfh+7pom9Zb7lrau4vqqlvVs29MTV/EdGpHlMtvdFDwzN27N29DFkYsGDCxnHQa2QyGTkza2UUSeU0GFtQV2BJ73hqarpVUEtfSm0uSzcm996RuZoihW9lFh8oWto4NDxjh10yZGHAggkbB679biOdTotxSgxES7oeqOq9uxWd6Uvo0khGo9a6CvcfyzjmIUMWBiyYsHE4ZRz/8yLxmaxcsaI6/Yt631PVua+Tuhkpa35959gFDh4YsGDCxoEL5/MilmVpZi4t79S8PgtW7Cts7Z/T7dg9be48eeUSzoEFEzYOXDhx08EuEktldNtcUNvYklq+WdB1f0XV73ZPrIRzYMLGgQsnbrtIatbSaDyv7r2/XevIsi4MFRSpfH/iJZwDGwcunLjpYJgJS/2Rkj70Lur0nbJ6zBWt7vzesCKwceDCiZsOxlg8q08DZZ11r+j8UEn+4nbDSjgHBy6cuOlgDJs5XR2v6tTwmi56q7LWf2p4ERy4cOKmgzEQzqp9rKrXXev2d2Jh67eGF8GBCyduOvynCD8r208bXgTHfqddZCicUYevombXqn1d8w8bfyM4cOHETQfDY1rqnijpzZGaLgyXNbWy2/AiOHDhxE0HIxRL6UYwb//rfWNw75oyj7Tx858NKwMbBy6cuOlgROPTGg5b6vSVdG54Se3+VWU2G/eewMaBCyduOhjxeFwBM6G+QM5ueNa190HK7zTkVmDCxoELJ2462EXM2JRck3O65ivobfeSLvsWlVj75cSLwGwfX7IduHDitovEYjEx/si0bgUsfeRd0LvusrpCq0qu/6rN3b9euRAMWDBh48CF0/Eb0WhUTNiMyTs5rb4JSx3egh3oCKxopPiD8lvP9PDJ38cuRIYsjCv+2r/MPTYOXDgdv2GappyZjEQ1GpqyF9tHSzo/smh/JbvMTblLP2r2wVOVHz3T8uM/6g477JIhCwMWTNg4cO13G5FIRPsnFDblCcZ1c2JGH4/m7d+ClwvYB74VdUc31JvY0lep7RcOz9hhlwxZGLBgwsZx0HuoiFPGF4ppIJDSl+NpXRmdt2FnXEtqGlrRa4OrdYcddsmQhQEL5otK2EXC4bBeNsHJiMaCUd3xJ21Ypzevy56i2u6W6g477JIhCwNWPVfdIgcLDQUS6p9I2Vdcb9hh9ygFnPkHMbkOQtw6wYIAAAAASUVORK5CYII=", "search-focus-v.gif"],
                    m: [u("search/focus-m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAcCAYAAAC+lOV/AAAAUUlEQVQ4y2NcsuPkfwYyAcu9z2wMZGt++JUCzczv75Gl8f///wwsvhaqZGseBaNgFIwCygHj+cdfyC96D11/RX7pCbSZfM1SbF/J1yzDTr7NACn1GmiOSs0vAAAAAElFTkSuQmCC", "search-focus-m.gif"]
                }, "0 14 0 20", {inset: '-3 -13 -3 -21'});
            },
            
            // list
            // list: function(rowHeight) {
            //     // return new uki.background.Rows(rowHeight, '#EDF3FE');
            // },

            'shadow-big': function() {
                return new uki.background.Sliced9(shadowData(), "23 23 23 23", {zIndex: -2, inset: '-4 -10 -12 -10'});
            },
            'shadow-medium': function() {
                return new uki.background.Sliced9(shadowData(), "23 23 23 23", {zIndex: -2, inset: '-1 -6 -6 -6'});
            },
            'table-header': function() {
                return new uki.background.CssBox('background:url(' + uki.theme.imageSrc('table-header') + ');border-bottom:1px solid #CCC;');
            },
            
            'tree-list-header': function() {
                return new uki.background.Css({
                    color: '#718193',
                    fontFamily: uki.theme.style('fontFamily'),
                    fontSize: '11px',
                    fontWeight: 'bold',
                    textShadow: '0 1px 0px rgba(255,255,255,0.8)'
                });
            },
            
            'drop-preview': function() {
                return new uki.background.Sliced9({ 
                    c: ["drag-c.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABwElEQVQ4jWNgQAK+aXdt/NPubvJPu/cGiP/7pd77B8NA/je/tLtbfFPvmjKgA8/o23z+qfcmgRQB8V8oRjEAjtPufvRLvVuEYgBQoBNowB+QgsCM+9ejSh7WF0187ti04LUxCBdNfOIcVfygNSD97kOw4SC1afeaIJpT7rkCnf0BJBGcfX9r+aynVjCN6Liw75lbcOb9oyDXAfX8AurVA9m+C6Q5IPPeTZBNuDQj48D0u49BeoAuXsgAdM5bECe69H4jMZpBOKroQTfYgLS7TxhATgFx8nueuRNrQGbLk1BoQH9jgIV67fznpsQaUDn9qTUsMOEGEKsZhKtnv7DAMKB02jNbYg3IaHkcDA3E78BYuPcFHIhlD6qJNSC84P40qAFPQS7YCUpAAen3nhETjSX9T5wCMu4+giS8u3MZ/JJv2cFiIijr3sHSSc/tcWnO7XjiDVRzGpKk770DJyRoUs4HZxawS+6+jCy+35nf89QVHGBznptldTz1BTp7BthmSPz/9k25V4WSH3xT75SAkyck5/3FhUH+9k+7k+eQsJ8DLU82MIGyqn/q3TWg7AyyBaERbPBToEuXeKXeMkDWBQDc2R7fquJzGwAAAABJRU5ErkJggg==", "drag-c.gif"], 
                    v: ["drag-v.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAAHklEQVQYGWPwT7v3F4SbFrw2JgWD9aXe+8Mw9A0AAKdtlPmxoeQnAAAAAElFTkSuQmCC", "drag-v.gif"], 
                    h: ["drag-h.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAQCAYAAABXwODhAAAAU0lEQVRo3u3TQRGAMAwAwXjCR1EBQqoEZTGABjp1kMmPzz7WwM1cjCsXUAsRoDHKfN4DqBkFjAJGAaOAUcAoYBQwCmAUMAoYBf4e5bzzA2pGgYYNtJpkoHuF6t8AAAAASUVORK5CYII=", "drag-h.gif"], 
                    m: ["drag-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAAECAYAAADPh6BsAAAAKElEQVQYGe3BQQEAIBADoD3WyIYmsZ8lbOAVALrPXQG+GmDUAKMGGD34YQJREnniOQAAAABJRU5ErkJggg==", "drag-m.gif"] 
                }, "8 8 8 8");
            }
        },
        
        images: {
        },
    
        imageSrcs: {
            x: function() {
                return [u("x.gif"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIHWNgAAIAAAUAAY27m/MAAAAASUVORK5CYII="]; 
            },
            'list-selected-row': function() {
                return [u("list/selected-row.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAARCAYAAAArDQkmAAAAN0lEQVRYw+3RAQ0AMAjAsHNVN3atyAEbhHQS1ng/62hM1wIgAgJEQIAICBABASIgAgJEQIBIy2u67AKjWqm8DQAAAABJRU5ErkJggg==", u("list/selected-row.gif")] 
            },
            'list-selected-blured-row': function() {
                return [u("list/selected-blured-row.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAAGUlEQVQokWO4cuXKf1Iww6iGUQ3DWAOpAABAkpxfQrJxGQAAAABJRU5ErkJggg==", u("list/selected-blured-row.gif")] 
            },
            'list-unread': function() {
                return [u("list/unread.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJUlEQVQ4y2NgGAVYQc2qG4rtu17Wtux6ebxt1+sfILpj54uahuX3FQhqzmy/pFSz7OHKju2v//fuevN/4t43YBrEr179dFlB+3W8hjDmTrjSWL/6+f+Ora/+d2xBwkA+SDx/2p0afAYwp3VeP1255Mn/mhXPMDBIPKPz9nF8BrBEVVz6WTjz4f+SuQ//F89BYBAfJB5TfvkHXgO8k46dSWm//T9rwr3/mUgYxAeJ+6acxOsCZsegrW3+GWf/R1Rc+x9bf+N/QvMtMA3ig8SdIw7V4g1Ec+cZWk6hO9Z7xJ7875V49r938gUwDeK7RBxY6Ra6U5FQTDKZO0/SsvfZ3OYYvPeMS+jBn87Bu0/b++9qdAneokRsWmIEeQcUJlDMDBUbhAAARh3Ic97iQwkAAAAASUVORK5CYII=", u("list/unread.png")];
            },
            'list-unread-selected': function() {
                return [u("list/unread-selected.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVQ4y2NgGAVYwf///xWAuBqIjwHxDygN4isQq3npf+xgKUFDoDbhA9WEDDhGwIBjhAz4QcCAHzR3AcVhQFksUJwOhh4AAMVYJHi3XECRAAAAAElFTkSuQmCC", u("list/unread-selected.png")];
            },
            'list-attachment': function() {
                return [u("list/attachment.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVQ4y2NgGCpAFojbgHgmEGcCMRepmvuB2BmqEWRAPKmarZDEDIC4mBybGaB0DRD7kqIZpgGmOZ5UzfHU1GyALwYIabaCysviMgAUz5ZALAzEpaRqVoAqBgFWINYC4nJiNcOc34LEZwdiDiDWI0YzsheQE4wdEPcRq5kB6ndQCisA4gwgjgViMXIyjjgQixCrGABccB1YrtCQuwAAAABJRU5ErkJggg==", u("list/attachment.gif")];
            },
            'list-attachment-selected': function() {
                return [u("list/attachment.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVQ4y2NgGBLg////+kC8GYiPAPFUIBYkVfNuIE4DaYQa0Emq5igkMR8gnk+yzVAxkAtWAnExKZrBGpA0d5KquZNqmqH+FyRXcxRUXh+XAaB4jgBieSBeSKpmY5BiKJsTiJ2AeAlRmpGcvxGJzwPEfEDsQVAzmheQE0w8EO8iSjNUA8jv84F4DhBPBuI2IFYhJ+OoAbEiseoB7WhRVygLSMwAAAAASUVORK5CYII=", u("list/attachment.gif")];
            },
            'attachment-header': function() {
                return [u("list/attachment.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4y+XQsWoCQRAG4M+ca+49UtkYLAJB0JN4IAd28QXyIoE0SWebBAu5SqsUeUKbEa5J3BRWGdhiYb6fmeFfVB9r7OMtUeTiAkNsAtYRMvgL/sA9rrHIDejiWeAbHPB4boUurvGFEd5xGzfJwg+BV/iMSRJ6P+ErTLGL5ldUgRf4xt1vAQkvaFDiGdsOnpwbf4AW42gsMc/Fpwne8BQhTVw9C59uUEVIG+tMc3E3JMU6Kf6XrSOKlBrzbNjuNAAAAABJRU5ErkJggg==", u("list/attachment.gif")];
            },
            
            'table-header': function() {
                return [u("table/header.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAR0lEQVQoz8XNORIAIAgEQbn+/18Bj8TMMlgCJ6Wa1blrYFqwTT38fjk/6YEzEl/O/IVHBXd3HBMRjnc4FpFPyyVsZjhmZhgvHLIaOS+PnNYAAAAASUVORK5CYII="];
            },
            'splitPane-x': function() {
                return [u("splitPane/x.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAMklEQVQIHR3GoQ0AAAgDsP1/AxaNhSMIgoNGhmhSzAzN7Olwd1bV0xER7O6nY3eZmU8/oKwy0Tv1fE4AAAAASUVORK5CYII="];
            },
            'splitPane-v-bg': function() {
                return [u("splitPane/v-bg.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMklEQVQY083KMQEAMAgDMA48ohArNQUts9BzuZPdfWHIqgorSvIiSS/urhdn5vsIwIoPCOcbF8QKbsQAAAAASUVORK5CYII="];
            },
            'splitPane-vertical': function() {
                return [u("splitPane/vertical.gif"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAE0lEQVQIHWMsLy//z0AOYMSnEwAIngTLoazFLgAAAABJRU5ErkJggg=="];
            },
            
            'tree-list-header': function() {
                return [u("header/tree-list.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANElEQVQ4y2NgGNagHQ1TZADFLvAl1wAGqGayDWEgxxBcCn2JDQ+aOLmdEkOoFpX0T4n0AQDoThJhbb2E6gAAAABJRU5ErkJggg==", "ThreadListHeader-m.gif"]
            },
            'unread-header': function() {
                return [u("header/unread.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVQ4jWNgGAU0A4JAHAzE3VAcDBUjGoA0LEPDwaQY0I3FgG66GkCxFygOxFFAAgAAoF8RlRhg/AAAAAAASUVORK5CYII=", "unread_header-m.gif"]
            },
            
            'toolbar-get-mail': function() {
                return [u("toolbar/get-mail.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAACKElEQVRIx9WUy0sbURTGtSIIjRtxoYRCQSi4EbHIiBQqFApdhO7c2H+gK83ateAqm0JLuxiQgrgRxC4EUwqFkpYq2tIQQzQPhsS8M0kmIe+cnu+aBBNNk+iU0gM/hjtzz/nm3vPo6/sPbJB5wDy8xAQz8DfE7jD3mEcmk+lZOp1+X6lUjuPx+DtJkp7y+3lmXE/BUUYyGo1PFEVZI6JkLBYjn89HiUSClxRyOByrvGeBmWVGbiM2zEwjmM1mW+bgZ6qqksfjIafT2SAUClEqmaRqtWq3Wq0va+JTzN1exIaYSTjLsvyiVCp9yWQy5Pf7yeVyNQFBGL4Hg0HKZrNULBY/WiyWRfZ/XMv/YCfBfmbObDY/5wDbhUKBotEoud3uK4TDYSG490Ojk0BBCOIWcPVs5VQqtYH8c7yZjqIGg2EBXsgXglxHJBK5EPypkfxZFdSFvV6v2JPkK+diIxyim+udRsB8Pi8ccSJcYx3kD7Z7EKM3+4Em7Eq24YcnrFYXHU2iFsvlciJQXXDn6zm9+uBp4u2ejw5caqsrRKUbiV62rU+ntL553OD1jp2+n4Tb7tdFFHbkDJC8e0jffimdtt5OlPuQeBIRV6UoEKyRN6w1TdNflHuPeOSJ6rzO8B7fuaf1EUVAFBB69k+GU6OnW3+sJ9FyuSx6td3p2qUA0wnjEinoSRRCmCz485sCf7Rat6Jo5iVmRQeWuh0OGPhjzH0dGKvF+/f2Gzk0rH9bwnSYAAAAAElFTkSuQmCC"];
            },
            'toolbar-delete': function() {
                return [u("toolbar/delete.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAACbklEQVQYGe3BTWgWBAAG4Of73PZNwjnnWqRkMAYb5ikr25rSCtyILLIMMaIWko2ZNbdDSj9iBlISlnnqoE0i6IfAEtKgg9ml0tqyLvZDuShBGzhHThtvhw4eOvlthw49D//7t2Ie7e7LQP/Hee6Zk3lx+1959ukfM9B3IGu7u1E0jQpZtWph+vuGs21rsuuVZO+e5NDB5I09yWuvJi88nzz5+JHxzs6rTYPC+PLli7O+Zzx9G5LennPfrLhz/5utS17a1NS08e221p1DK+/+6MKG9RPZ+ETSu+7MWGfHdSiYgqq03fBVbm1LbluatN84un9+wzo0oxEtuKln9qy1Z5a2nkpHe3LL4iFUKlNxkoGQcPYXRkLC+AT3oAol1KDxIR4If4b8wRoUlWFmOBpyiMEuHj7BiZBwITyCIgqoRuOXvBMSPkBJGWrD+ZAdPIiWJjqHOBoSEjajiAJqBukNCSdR43Kt5pqQkAFacQXmVbPsCAdDQsJuzEBpN10h4RzqXKYCrgoTIe9zOypQgQYsOcC+SRIS3t1CzWHuDQm/ol4ZrjzNtyHjbEGlf8xAHa7fy8vjXAwJn4XXQ37iE9QpQ+2H7AgJv73FPJcUUYtF23nqLGMh4XzIIP2oUYaZWPQDwyHh8DBzXFLELLS8x+ZwMeR7vkMzSspQRP1j3H+KsZAwEjaFjtAYusK2MBoywuk1rMRcFJWpCtfex+rjHJskISEhISET5As+vZm7sABVpqCAaixA+z52HufYCGO/k58Z/ZrPd7EVrZiPEgqmqIBKzMVCLMMdWIEutKMZc1BhmhVRjVrUowH1mI0Siv7L/gYT9B/L2Zyi6AAAAABJRU5ErkJggg=="];
            },
            'toolbar-junk': function() {
                return [u("toolbar/junk.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAAC0UlEQVQYGeXBS2tcZQAA0PN9987MnckkadrYptKm0krBBkt1IYKI4EJXXYiCUP0LIgXRjQtB3LhyoVAXggguXImKUHVVcFVLKZSCiI+aoI2FPjSZzPPez0dxYZxp4tpz+L8Itu84gskSPrENua0dd0uWUvrQBCGEJ2xTbmvh1PkPPrKFk08dfPCFE0fmRimdOfDkp9+7jdwE377h6ciJ05ePNmzDw8f2vHT265uIfjhlOfWdTrx26HnLNslN0B84U9S9t7Azq1812btfXvSXR972p13nXjW1+Mzixo/vP9r5xXPGiCZYetHqoOPjsrfiv4nK7hXdDSeXXjEwRnAbF1/2WCh91pwnbx80WL9muParNCSVpEQaUFbkBbW5ReX6sv5NX9z/pseRjJGbLKwPFHMzVP4QqLXnZFNtUQ2RNFSNuqrqGqlpcGNZSJT8hgwjY+Qmyze6ji4skjXJWnNCmCL6QyBFIZWqqqvszSp732kuUPYZVpbQwMgYuckaw75jVUkoyQ3EYrcQa25JJIJpsVaIjQbVBtVltbZ9aGMDySbReAFFIziYSpSk1CcEf0tVKY3WSCMhqwtZTloTAo1C+9n7LJggmixv1e2rzdbUZu5Way/Ji72yYresMS/kLSmVYpySFXtkzf1icVg+vVc+zQMHHEFmjNwEhwutorArb94jNhfExk7yppQqoRqSEikhCVlTJgkhinlLNbxpx2z3EHKMbJKb4KH97hj29PLpe1uxOSPmbUIkDVWDoVhrC7EuNnaItbaQ5qRUqUY9w7UbprPzdyE3Rma8eOE675z1zfRye2p+70zr+kpvozPQWe+WnWs/r3dWLvU6/dV6FvrNvDG7Q2xN65e13srVjeVzF1a/ev2tnz6/wiUMbBKMF9DAPHbjTsyjjuCfRuhigD766GAFqxjYJLi9iDqaKBD9W8IIFUqUqNDHCMkmwfYF25Ns4XfmhwQY23b+DAAAAABJRU5ErkJggg=="];
            },
            'toolbar-reply': function() {
                return [u("toolbar/reply.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAAB5klEQVRIx2NgGEKAkZ6WMQExt6urq5S5uTkfPSxnAWLRqqqqmI8fPz6IiYkxAvKZaRmUHECsvHv37ll///799R8I7O3tPaEOoToA+UQgISHB9eHDh+f+IwFTU9MwqGOoGsRsQCw9f/78qi9fvrz/jwYaGxv7cnJyQL5VA2IJUFxD45z8xKKtra1//vz5Lf8JgD9//vx49OjR6ZkzZ+YB9cmR63vWadOmeb579+7RfxIBKAr8/PysgWZwkWopR11dnf+TJ08e/icDgBwrLy9vCI0e4n0KSqmsrKyJa9euPfUPCEi1+MyZMzuBZsiQEswghZxArATEQQUFBYvevn37Gd3g7OzsTY6OjpMSExNnp6SkLJwyZcr+y5cvPwZmqb9A6b9FRUXh0PgluTAQA2JbNTW1qrNnz95FtlRTUzMfKAcqIEBBaQ7E7kCcCMy/vfeA4Pjx4yug+slKybxArA3EcVOnTt318+fP30j5lBMadyAfgYpFSSA2lZaWjr958+ZeIFuBkhIJZLAsEHsGBARMePHixRMXFxd3LCUSrPTSWLFiRa6SkpIcpYUHqHQSBPlEUlLSnY+PTwVH2QuyhFdISEhm4sSJcpQUGOiJTIBAIQByDLuvry8XNSxFtpyRCDVM9K57BxcAAFmihZEgAelPAAAAAElFTkSuQmCC"];
            },
            'toolbar-reply-all': function() {
                return [u("toolbar/reply-all.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAACy0lEQVRIx2NgGOSAkURxigATEPOmpKTIAGkuNHFuV1dXKXNzcz5qWs4CxOIdHR2pX79+fQJkKyKJi1ZVVcV8/PjxQUxMjBGQz0yNoOQAYpV9+/Yt+vv375//QADkW0LFlXfv3j0LKP4LJG5vb+8JdQjZAORiwfj4eLfHjx9f+g8FQAtAlnomJCS4Pnz48Nx/JGBqahoGdQxZQcwGxLKLFi2q+fnz52eYob9///6/bNmyMz09PZO+fPny/j8aaGxs7MvJyQH5Vg2IJUBxDY1zgomFW1VV1eDy5cs7YIb9+/fv//fv3/8DLTu3a9euM/8JgD9//vx49OjR6ZkzZ+YBzZMj5HvWKVOmeH14//4xsiG/fv36BxQ///z589f/SQSgKPDz87NGS/EogKOsrCzgyZMnD5E1fvv27e/EiROP37t37/l/MsC7d+8eycvLG0KjDdOnoBTJysqauH79+jP/QOEKCa7/wMT0v6Wl5eqKFSsuw8RJAWfOnNkJNFsGWzCDBDiBWAmIg4qKipYCg/orSBMwQf0HhsD/hQsXPs7MzFz79u3bz+gGZ2dnb3J0dJyUmJg4G1iILARGyX5g2nj8F5TkgQkfaF44NH5xFgZiQGynrq5ec/78+Qew7AIMKlCWSVNTU6s6e/bsXWRLNTU184FyoAICFJTmQOwOxInA/NsLjJp7x48fXwE1F3+xB8Q6QBw/Z86c/cAs8wcUsqB8CsTaQBw3derUXcBQ+I2UTzmhcQfyEahYlARiU2lp6fibN2/uBbIViCmR2KHJ3is8PHza69evX0J9Ac7LIAcEBARMePHixRMXFxd3LCUSrFTTAKaHXCUlJTliCw+QQcJAbAEMQm+oZfBSC+QTSUlJdz4+PhUcZS/IEl4hISEZYC6QI6bAQA5uLqgl7FgSnwCBQgDkGHZfX18uUiyFWcCIw2BGIoKNEWohI8OIAgAdEkrM+VJMxgAAAABJRU5ErkJggg=="];
            },
            'toolbar-forward': function() {
                return [u("toolbar/forward.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAABXklEQVRIx2NgGAXEAUa6WmZubs7n6uoqBWRzAzETPSxljomJMfr48eODqqqqGCBfFIhZaG0pi729ved/IPj79++v3bt3zwKKKQMxBy2DnMXa2jroPxJ4+PDhuYSEBFegnAAoJCgxnAuIZYFYDQ1r6ejoZP5HA1++fHk/f/78KqC8NBCzkWupyn8ywPnz57doa2vrk5vIrP6TCT68f/94ypQpXkAzWEm11JFcS588efKwrKwsAJq4SAKWpFr2DwjWrl17ipWVNRGaokn2qSIQxwJxBRqulJWVnYFu4du3bz8XFBQsAsoHAbESEHOSk4VAQSMBxApoWMXIyCgN2cKzZ8/eVVNTA6VcWyAWo0VhAc+nP3/+/D116tRdQLE4INYGYl5aFYssLi4u7i9evHgSEBAwAcj3hOZnNlqWSMx8fHwqkpKS7kC2KRALUloKEVXLQONbgNzEQonFdK1PKQIAnghowXUWSasAAAAASUVORK5CYII="];
            },
            'toolbar-redirect': function() {
                return [u("toolbar/redirect.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAAB40lEQVRIx2NgGAXEA0Z6W8iZkpIiA6R5gZiJXpbKffr06e6kSZMygWxJIGalh6UmX758+fT///+/x44dWwnkq4J8T+sgt/rw4cPH/1Dw7Nmza7m5ud5AcSEgZibFIA4glgBiFSBWI4DDkC0FgZ8/f35evnx5PSjogZiNWEsl3r17d+M/heDy5cu7LCwsjIDm8RCTyKQ6Ojp6/1MBvH///smUKVO8iElgoOTvc/v27ceUWvrkyZNH1dXVgdAowwtAQaEKVDyTEgs3bdp0lpWVNQloljKxWQkUD15A3z6CGfIPCBwcHJYAxeuAuAKKe4Hx/wXZsg/v338tLS1dAZQLBmIlYrIQyJdc0NTrkJWVNRfZwN27d+8DipsDsQIUBwAt+YSUeB6Zmpo2AsXtgVicWB+yAzN54P3791d+//79A3qQff78+SMwyMyQ8qA1sHD48hcIFi5ceBjIBwWnLhDzkVIsgvKVFNQ34WVlZTP37NlzCVjUfYNZPHfu3HqooSBg+Pz588dJSUnTgWxfIJYHOZzUEokJGgegEkURiC2AOASIC4qLi5cdPHjw9PXr17dDgw4EpNXV1T2gjhQBYhZKizhsDgBZAApeQVh0ALEANB1QvZaBOUAAGrSsSHUp40DUqSQDAL3v89667EwpAAAAAElFTkSuQmCC"];
            },
            'toolbar-new': function() {
                return [u("toolbar/new.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAABkklEQVRIic3UMUgCcRTH8X+QBUEIQS0FLRY01lBDk4S0tTfVYELQZNTiIlK4BFGb1VJD0NmQhg4lNqSgixkUhp1FWtEgIhbUkeevdxmSENn/9KAH3+nP4wMH7xj7hzNWR6pnHCpG2Tux25vh9S5ROxAEPQ9qVIPqW5tNd6HQNQIBEAp4PAs8qIlbLMm4CK0/ZDIZBHw+PAtCnlCDhqgMpOYgxUZw5HdjZdlR8jmdkzwgJ1oGEWEoHTI8rrXn982D3CAHqoCzFfBtlRXEKTZK+z1UL9XWYLQalLcYbENskXb7qH7K0GCUQNFSAYubDE+xoHIyM9QA1U218IC10W/g+wbDzakXiURCQS1UJ9XEC/6OSvdA0vwJSi6Gy2M34vE4UqmUgk6owWqiL7cCcO7A6/Ywzvy7iEQiUG5TlmUFNTUcFZNXcNqmcbDnop9OANFoFLlcrvKuCZpOpxEMBhEOhyGKIiRJqnrXBC0UCshmsygWiz9+ek3QWlMvamTlm7NS83/M+rWnenRUB9XFma4eVJP5AH8kM5mHjOhWAAAAAElFTkSuQmCC"];
            },
            
            'arrows': function() {
                return [u("arrows.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAABAElEQVQ4y62UvQ2DMBCFvQFsQDYzm5gN0kQCV6YBpDQ0MS2jMAIjOGfACrbOPhd50quwPt3POxi71E3L2qr5wQgZY1Yw+Y7JaTGHx6V/qrlMAJ16cEkDD6je20E3GNj42sENCvaAl2EMG4DrBNBpA9ck8GctCKCTICuU44dnVsiTM7RVSfkuMmYowEV0ht2kFQZCgAoF3XP4GnSVmUPy3f9kK0tt2H6/VZbS8Y7ZNlNANwbbJgGsblXCItDqtArmpyIw5W8YtnpGJYhOsG271SsqYXSw2EDuItcRQEX0OpAFbe5CiOhs7kLSvzA4s7Nd/9wQIL+APOO/qEVO3GKtfgEB6EwzIYKPOgAAAABJRU5ErkJggg==", u("arrows.png")];
            },
            'tree-selected-bg': function() {
                return [u('tree/selected-bg.png'), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABJElEQVQ4y61UQZLDIAyTZrhu/3/sD/YjfdIi9QAhxoGmh80hEEMsydaYz9+X8Y9PeTx+wPFJAO4rYBgEYXhxuogQKJJhr0mShC2QHcDusb2oIilgOqAC7T8j/h+TZQUAUP6qdgJS+oVkErDa2hlMksnGKpyP2NdNqdLJyGkFQH9guKvhkSAzvGhOz6UkTE2xWjYrICgirJOOvYxSq3N4sffGlxyx0OWafOcPviOAU9GRmgGwtMucPHYm8PDiSoE6oIJLSq06r6QqX2x050sQRRN4Pz6Y9lcEdMjojujRNPUa7hglY39j/GJ5rk5mFMqWjZ/3ocvcTJs7Rteqllo1zbN5OuQM1/nX7pwAxQYMrXzcjGsN4xrqZl7fB5gl3xsj+nA10d9McATavUOaqgAAAABJRU5ErkJggg=="];
            },
            
            'mb-sent': function() {
                return ["SentMailbox-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACBklEQVQ4jb2TTYhSURiGbZh+mZSSYaJBahVMUTqLNrlr1aYhksjCoEWzEVsG4qaYAjctgyBbmMigC5PxD2lr/lQgJDjXjZAi+ANqctPR8V6/3nPnKLepIWjRCw/34P3e777nO0eN5j/rKNCpuPQ3wzxYAIvAAM4lEglzp9N50e/3P9hstmv7DXPgBDgNlpmBPQVBuDkcDl/KstwVf4g0GAwom82+2Z9ggRsMVqvV0Gi17kqS9I6I+oB6vR7VajXCl2k0Gn3T6/U21J6amZ1O52q9Xneg9hMYEddYGlOlUlHMbM3k8/mew3NVPZjVQCBwOxaLrW1FtzaCweCraDQa8Xq9nwuFQovFngpJPqL+Djg+bXAhmUyuIxaJokjd711qt9tULpepVCrJqVSKVJJcLteTX/aOvaxMJpOv0woMSomLwY0bjQZlMhnCAJV31Wr1PSy3+OnMdB3cM5lM6/F4XI5EIuT3+ymXyynNisUiNZtN5u+YzeZHfNB/FkwxFjkcDtO2IOwyFwarJMrn829RcgMcOrBBKBS67/F4yG63f0mn05uswc5wh53CtlarfcAv1G9iHY8AndFoXLZYLK+xvuxwOJ5N5+J2uzfw25pm74Kd5Cc3p27Abt8SOA8ugivgIXgK2JcfgxU2c147r94KWxwGxzR7f5DZFQZnwRkeXceTHjyDf9FP6cxD9Zp6oCUAAAAASUVORK5CYII=", "SentMailbox-m.gif"];
            },
            'mb-inbox': function() {
                return ["InMailbox-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1UlEQVQ4T62RTUsbURiFg4i7EBTp3v6FIi5KiP+gLV249j+0m+66qHSpVFBwZZW6SMSYtLQ2KY5KTBkTyKeJaSedJMaJkXQ+AmkyzXi8b0jC5KNIoC888N73nnO4HxbLf6wJxiPG7D2QZnxYwINAILAiSRL+VbQXjUZ3mXZqwO1yuZ7ncrmzcrmMhZfOodBeUSoW97x7T/v94xzHvapUKs14uoAXbw+HEknkwTTgef4184yZA6bP0+kNRVHg5VJYdkWw6kn08G4/gU9BAaQRBMHJPJNdt9vtfiYrMq9qVay5Y1j/nMLG14tBDlKQFQ2yLMc9Hs+Tjn8sFAotqaqaT+dumDCD98cCI9vD1kkWm0cCkuINtKpWCYfDbzrXsImiuNNoNOCPF7EdFLF9+gs7fL6HzsyXkEDaQqFAv2GjgIe6rpfM3/UtJWE3dtUDzfqLeWcoYM4wjOp38TeIZEnDh5MMjn+U4M9ct6CeZrTX0bF34MhrsVqtjyktL9e6+PgsuPMrfIxdtqCeZmYNFXnpBHZalLR6l8tyFb7gTzi/JFtQTzOzpn0FOwU4aCHX9C5q/S/+NA0Yt2hBPc3MmnaAgwLmaVHTmyPRDpi3tI+xwFgcEfLY7wCqtGPkrXAP2wAAAABJRU5ErkJggg==", "InMailbox-m.gif"];
            },
            'mb-trash': function() {
                return ["TrashMailbox-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACdUlEQVQ4y4WTTU8aYRDH99IP0VN76Sew6UFDiBcS+4JBJQKuScOyVViBQC0IS3lTlqUJoEINarGtEkkTTY3WphfTNDVtSloubQRUhAWe8VTTj9BZD22ihU7yP2ye+f9mnplnKepvXEkkEjpBEJamp2eKk5OT0tjYGJjNZuJ0PmxEIpHvqVRqE8XIudTFiMfjOYvF0jKZTNBJHMe1RDH26hLA5fI05ASapqGvrw+0Wi0oFArQaDTQ29sLer0eBocGzyEej6dxCZBMJj/p9QbS09MDOp3uj1n+lo1KpRIMBgPg1Ug2my1cArjdbu/i4iJEIgIYjcy5uavrJqhUKtlMGIYhWBmSiRSk0+kQ9a/w+/0kHA43dnZ2m8VikRQK30ipVCblcrmZz+el2bnZGnYKVLvAqUuiKBzhJo5Xnq9U0SBls8+qaKplMplqNBqthUKhjoCS3W6vxWIxCSH1jY2NYzRJa2trdVEUmwiSAoGA1BZgtVo/Y0LJZrOd4L7rPp9PyuVyh4IQqcnt47mEHRy2BWD1XZZlj7DaCc5DWl1drfI838I30nA4HE25OkKLbQG4opdTU/zB6CiDV3hCHA4PBIMi4TgbwcdD8FVKOOQ3bQFery9z987Aj4mJR3UTYwEfPwNOhxdXmwQL5yQmhqsEg9P5DgA/zxjHv6jV2qrV6mqOjLDAMDZQq3XAPrC0+vsHK/Nz6XhbQHe30ry99fb9wsJShWXHWzRtJC43D/NzT2F5+UVzZ/vdEU3ff0x1iOv4L9j39j7sbb3ePdjf/1o7Pf15cvbrrLy+vvlxeFgfxZwb1H/iKuoW6jZqADWEuodSoK5dTP4Nv1tkKI/PLDEAAAAASUVORK5CYII=", "TrashMailbox-m.gif"];
            },
            'mb-drafts': function() {
                return ["DraftsMailbox-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABlElEQVQ4T42SW07CUBCGG12DqyDeXnnABbgDN+BqgBXog0++QeHRBDUQEyRACDe5RqAXoFAqFKTcxpkjbWwLxD/509PMP1/nnB6O+9XZHnvQp+gT9BF3QJewQ9lSvUBPVVXFQCDgOQTxOptlVYfX95L1PhwOpUMQnxlco1u9MTREDRKpog2Kk8j7IAywWm+gKoyg3Z9AByH5ch2cwkm6fr//HHuObYBvYwX5pgLSUIflagPFTwVa7Y4LYEKCweCFDZCu9KA/mrGAONBxijEIgrATQKLt2ACabrDCGreRaygwN5bQVxR4TiQhFOLh7uEReJ6HSDQC0Wh0EA6H720AkyyrU6jhAZIWiwXEkmU2STxVgkyhxtaSJAH2XLsA9AfS1R5MZoY1aqrSZc/xdI61LsuQsOfKBVC0GWTrCvxV8kO21lSjzBbgcwHo6/JItwHeipK1phpldgK+8BDjBdEa0VQ8L1prqlGGsi4AjdeUNXDqJWe/Cw1JY1txAZ4yLXaBnIpl7QDKUNYJ8KJv0Lf/9M22h/sBFOp0+67glEsAAAAASUVORK5CYII=", "DraftsMailbox-m.gif"];
            },
            'mb-folder': function() {
                return ["folder-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvElEQVQYGQXBMauXZRgH4Ot+/u85uEaFBCHi4GKBEQ62eIZaGnLWST+Bn6HFwa0PEPgFgjhDiw46OUjg4ByOQYNUyvG87/vcP68LAAAAAAAAAECBr3764frJrXsA8OrZ88denz4BAAAAWOD6ya17D+7cvgtB4Re8en36BAAAAKCu3v/54Zeff3ry43c3LlcB8MeLl2/goEABygCtvfn7n+fLpc8+ufnowf2bEkAzhpNvrn2xZSdszZpJx+zoDo48+vXxusDb/9/TE9AYumPrXaG7nKeloxNzxhjH2rBs+7r/dzZV7QYUSZuJ7ujQpoSEdLSWPea+bcue9Fqx7NOsEiREJFRiNkkEnQi66JYlM+bGnE0VSEhiiiQSWqRJSGFMWzrLrr1dpws9BQCNDt1tKJ1oqIC9j43uWjpjbOfnph0EkBDRDUBQgDlWa41aZiz/btNRdqWAEEASOxaAQtocQ+RoaZyds2UXw8QoMjmgDwRHCIJDWJeSZqnurOsH1WdaaQRpGgYNgGBim0hneffh7P1vp7+/UBQAAAAgAAGOq9/VlW+/v/TXn09XHHDAAQMDAwNBo9GYmBe/vnH8EaMMKbkNQ17cAAAAAElFTkSuQmCC", "folder-m.gif"];
            },
            'mb-folder-empty': function() {
                return ["folder2-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOklEQVQ4jaVRO26EQAxlJhPOQIVWXIKWJg1HSJWWgisgqpwjEoegSBFSRVwCbcMNAkh8d94EI+9I+axiyfPx59l+dpx/isARhuFDFEVP3FFV1Utd16+/ASgcSE7T9NF2/gVAJEny7HleFMfxiTvKsjybACG+TW7b9t3J8/xtu1GWZTF3lmWVIrR1Xc2t7aYq7nEcj2p4w4Y4qFJfqWqaprnve2Pk7eoqxkZJBE72PWZS+rPO83wAIIiC6W0lcdumqAJvl0bi1elPoLttU6jedd0RQELBvDMCI7/+CzAhh2G4cnIAtCqlvCKaRtB+gREUSCT2OQAHsn07F/dmF3oTDkax18iT0AWBUUdmjSACIwDkFnFdF11sSid3RVF8UJWfxOZJx3+KIAj8pmmwwzum0lIQsjIFAYvv++4FKBNU/tlKtPcAAAAASUVORK5CYII=", "folder2-m.gif"];            
            },
            
            'dragging': function() {
                return ["drag-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECklEQVRYw+2W/2sbdRjHa3W4IZu6yfxl/4A/+R8IMkEUhCn4k+4Hf3V0DFxBKyVFa7vYmrSrZnkimfGWLPR6Np6JabOV5kaIhqMhEALhIBwcB+HgOAgH4SAcnM/zaYnp9yxr6i8GXtznPvfl/c7zfD7PcyMj//+e4be1tXXmPzUQT69dnbv/8NNTF15fX784E+GvBzkxJDwuwp1wfJ+JqampF5Jr0oc4fO7EDfy0nP4gsvLoXqfTAdd1gScToX9NpB/9dXUymgoupSR48uTvN05MuFCtvhp6mL4WFnLfG6YFitaCbEEDx3EgmZUguvLHmD+R9vFSGZyOC03LhrnEmo/n+XMnYiCYWPkomnoMDd2AYqUJXy7J8EWgBLlCA0RJhrAogdFqg+d5UNY9diQzFJFnEqZ8RpYz7/4QF/26YeI/t8AX2hYPJIowm8hCVTWYoNryYD7VBl9MA7nhQdvpgO8XMZjP518ZSFwUxfMzkcT1xUQGSJzC3bLbEOBK4ItmICvXmDBhOR4TngjX4ZuYDv6kgWnwYLOswAMx/8lABu7/lnln/tfU3ZZtM3EDTcQw31yuBJbd7ooTHdeDAK/CNNeEyZ8VjJAMUsXGeRf8GKVsPn+lb+GNjY1LC9zqx8GYGDQtC2wUyxUrKJCDmmbsEqaI2GiODNR1hwlPhstQqJgsBUSppsJC8s+blM7+Fhy3veBotctVBcMqsHDb+DISdREHBU1cdIqqISoYuOqbeL+wieOWjdd2Q+ZX05tvHise5n5/fyGxekeu1mGWEzHkRdAMC1qOi3lG2h0wbIeteLVpQk1RoVJvsHv0HrQ9lBUNvg4nv53juJeONBCI8bCEbueTWZDxIc20Qbfa+BIbVKMFjaa1jY47ArdkTdWhjmmhsaIdTUjYhHu4ow4RFuC0wOJ0cZf4d5HUe1TNehfXsEhmCzCxGB/rio8H42OzXBa4jIS13QNd16FUksHEBUVHRWmw+UG4Nl7t8tm8y+ZI51bwwe2ugekfl9/6CoRQVJRYc9E0HcVNBo3JEM0PAon2QnOksy//n89Eboexe1HROEn2RoDmSGd/vb8bv0Ltk7qYivu6iRWPKBZL3XO69rTsjQDNhYQDDNCHQ0CQBhJ5WhYPMTDi56Vu6TyKSrXGImJaLTZuYBUk+nmWIJ0DDUwnJVZqhw3pHGjAl0ADbedY9KYBKu6OcqXGxhQFmqe+0c/zpHOggYmYhC3WORaVyi/Wf9YDanV2To2I6n8/z09whxgY79PAYZCJfu4jnX07ABm9FZXAxBuGDemg3vO9n+yjyNkbZABb7LC5sW3g3I4uc0FfKRfevrkIpwXqvbyj2zVwHnkNuYy8PkQu7+hcQM70poBOXqRUnBKkN/oPxp1z+wD30VMAAAAASUVORK5CYII=", "drag-m.gif"]
            },
            
            'dragging1-2': function() {
                return ["dragBadge1-2-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAC80lEQVRIx7XWX2jWdRTH8demubKpNIug/xeLMiWoiyCUtSn0V6Sx/lwWYtGNBZlsVIh0tQ2TIYYlQcYIo24EFxWGXdQa1kqSRpFr5uY298z5PM+e7Vmzp3272O+3trn/rgMHzpcffN+/8znnd86P+dvSyBffNnL7J7wIdeysYyd8yrZS7rhiQD0VWygroyLHyCEOtHLuDJ2HOJBjZCNPP0XpYbbOW5oSbkXBUQ5nyTXTkiYMEVKRDxHShJP8liXXwBEs38Btc5W2oJGGZppO0TpAGCBcnMYz0fOTnG6mqZEvUDATIH8dN+Lm9/goEPpnAEz2fkIgvMvHuGU9N2HJlKR9VHcz1EZfah6Q2FOENvq6GHqHmukyWrKG8g4GswuAxD5IaCe7hnLkTyCspbCJgy20djKcvALQRUIHw6f441s+KGLleFbeZl6Ni7uQy/si743OCUIFVROyepDiXdT+Trp/gZALESQRxb+S2U3deu4aA73O9iTDmUWAnCd0R3E3f1fy2phsWPUCezNR51wpJAZtYx+KIgav8GyCVGaBkJ5xkE7COULXaPdlqnh+TLr7eOwtjp5hsH+RIC0MvcFnD01q8/zHeSlBrn8OkFiqGNI1DtIexW2MPMH2CXPvOlYd48gvDJ4nl5ylfWeCtBNO808T2QaOrRyt0Zhdi7X38HI72cFZit4TSRVDOiLA2f9k++tudizjXhReNoPq2JscTftScpbOmgpylvAzl9oIe9g/3ay7qoSHV/NcDZ/H07t3CkgsVQz5M4pThGqO38DWTTw53brIi0t2nG++48IJEmlCcgZIfP6a3i/pa+AHXB/dlz/TXlrxAOVLebSer9KE70n1RBJ2Rp6IYI2kOwn1NGHz/Txj0iCddgFGb3P1Dt7cQm0ZtQOE/TT/SPInUtWc6CNs4u1HqKliD1bMJZPL9lM0PgrvpGQ3B1FSyYeV1GPDLt5fR2nUWasX4zfsmtHPzbICigsojgpdhOX+J8sb1zhztn8BfjnSqGxySMwAAAAASUVORK5CYII=", "dragBadge1-2-m.gif"];
            },
            
            'dragging3': function() {
                return ["dragBadge3-m.png", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAYAAADfcP5FAAAED0lEQVRIx7XXWWzVRRTH8Q+byF4FRBQRDa4YICIhJpDIC0QjAZQI0QcVVIwPilFR0CjERAUNgWgxKqtRA4Kg0QdAYlzKVlCQtmyFQoGyFbqXktY6PtxpLaW3QIFJTs7cuZP//3vP+Z0zc7n40Qot47x19C2TrLVyJcZobl/IeJjPO2/wTC+uT2dJT675gJdmMKkXKeksuZnuk5nwBdNgIU+N4M5LBvmKscMZMpKnq6ieT+oh8newezlfVxGWsDib3L0cXMqiKsIKvsli12FOzSf1H6pHM344Q77jOTS7GI6WA7kJbVazoozKP9lZQqggFBKKCWWEguiLotVdK457KwglhK3sKaZyDavQYQA9LzSlbTezehPrt5NTRiglnIovq7HCej7ZWgHhZAQsImwjJ40N6/gV7RoDaX4P3dBjEctC/GUFl2CnouUTThCOx/kZwjx+aEPPQfSoUxBnj1Q+PELFfgqKLgPMyXowxwhHomVSmE3FLOYki1CLvozJ40z5FYA5GkEOEw7Fz7up7MO4GKH/hX4tHTcwL5N9R6gsvIwwxxqAySUcIOykaj25v8T2cZZ+RvNa4SXqJhlMXoQ5GGH2E3Lq+Ed5G81raQZx2zQ+2kNJyWWAOX4BMHuj30L5VFL70acW6E0mFVFZeplhDkerSdF+wj5CNmFPQkMhO2H/vsJbNTpqhpTnmVMae0VTYOqLNy/q5WAjMLvi2ng+R+daYb/M4/kUlzQBpqGyPh/MroSgQ1b0GZS/zsTalN3HQ9P56QCni5vY8JLB5JwHZhNnJrPmAcaiRW2VjeCFfKpLmthj8qIdrKOZfY3AZEb/N2EEr8ZzLZGyXqSs5cdMyo9TXXiJPaYmRXvr6WVnBMmItoXqtVQsZ117rqvbh9qhT18mJevUF9tj9sbI1MDsiBHJiFHJIqRTdTdTcC86nHN2fMKcgsRDz+rWDcEcaSLM9giURuVfhPeZn+wsu+p+hnfmydmsrTntTzbQY+rC5EbLSZKm+pHJiHtnkNaNZ4fyGNo2BFRzuHX5nY1/cGIL+SWxNx1L0vByG6ik3VEvO6JmtkefSVhF4UoKVpKF7vG9zRu7F3UayCN4cCm/FSfEV5QfU1dzfTgaKymvTqoO1Gl2u2JksiPIz5RmEb5kWwtG9ecJ9Q7UpBe1SN1mKtOG8d4oPi4nzCY9g7I0TsxhyynCLDanUbCRwplszkvs27qKExs5PZ30fYnS/mwoM6cwN4KcNzLn3I8SNxPtBjBsKp9i8Lt8O5HUroxZxtYOjHyRBZNY3IGRS9nWhXETmDuN7zF4Mgv68XCspK5Jb4gXMdoiBa27cMfV3IKUG+mPjq3p3Zre6HRDooRTOnFrZ+6K/9M6o70rNJolmV/o942O/wCWgGlL1BxZXgAAAABJRU5ErkJggg==", "dragBadge3-m.gif"];
            }
            
        },
        
        templates: {
            'table-header-cell': function() {
                return new uki.theme.Template(
                    '<div style="position:relative;border:1px solid #CCC;border-top:none;border-left:none;' +
                    'font-size:11px;line-height:13px;' +
                    'font-family: ' + uki.theme.style('fontFamily') + ';' +
                    '${style}" class="${className}">${data}</div>');
            },
            
            'table-cell': function() {
                return new uki.theme.Template(
                    '<div style="position:relative;margin-right:1px;height:100%;'+
                    'font-family: ' + uki.theme.style('fontFamily') + ';' +
                    '${style}" class="${className}">${data}</div>');
            }
        },
        
        styles: {
            'fontFamily': function() {
                return 'Lucida Grande,Arial,Helvetica,sans-serif'
            }
        },
        
        doms: {
            'resizer': function(height) {
                var template = new uki.theme.Template('position:absolute;width:7px;top:0;right:-4px;height:${height}px;cursor:col-resize;cursor:ew-resize;z-index:101;background:url(' + uki.theme.imageSrc('x') + ')'),
                    node = uki.createElement('div', template.render({height:height}));
                    
                if (!node.style.cursor || window.opera) node.style.cursor = 'e-resize';
                return node;
            },
            'splitPane-vertical': function(params) {
                var commonVerticalStyle = 'cursor:row-resize;cursor:ns-resize;z-index:200;overflow:hidden;',
                    handle = params.handleWidth == 1 ?
                    uki.createElement('div', 
                        defaultCss + 'width:100%;height:5px;margin-top:-2px;' + 
                        commonVerticalStyle + 'background: url(' + uki.theme.imageSrc('x') + ')',
                        '<div style="' + 
                        defaultCss + 'background:#999;width:100%;height:1px;left:0px;top:2px;overflow:hidden;' + 
                        '"></div>') :
                    uki.createElement('div', 
                        defaultCss + 'width:100%;height:' + params.handleWidth + 'px;' + commonVerticalStyle +
                        'background: url(' + uki.theme.imageSrc('splitPane-v-bg') + ') 50% 50% repeat-x;',
                        '<div style="position:absolute;left:50%;top:50%;margin:-2px 0 0 -2px;width:4px;height:4px;' +
                        'background: url(' + uki.theme.imageSrc('splitPane-x') + ') 50% 50% no-repeat"></div>'
                    );
                if (!handle.style.cursor || window.opera) handle.style.cursor = 'n-resize';
                return handle;
            },
            
            'splitPane-horizontal': function(params) {
                var commonHorizontalStyle = 'cursor:col-resize;cursor:ew-resize;z-index:200;overflow:hidden;',
                    handle = params.handleWidth == 1 ?
                    uki.createElement('div', 
                        defaultCss + 'height:100%;width:5px;margin-left:-2px;' + 
                        commonHorizontalStyle + 'background: url(' + uki.theme.imageSrc('x') + ')',
                        '<div style="' + 
                        defaultCss + 'background:#999;height:100%;width:1px;top:0px;left:2px;overflow:hidden;' + 
                        '"></div>') :
                    uki.createElement('div', 
                        defaultCss + 'height:100%;width:' + (params.handleWidth - 2) + 'px;' +
                        'border: 1px solid #CCC;' + commonHorizontalStyle + 
                        'background: url(' + uki.theme.imageSrc('splitPane-horizontal') + ') 50% 50% no-repeat;');
                if (!handle.style.cursor || window.opera) handle.style.cursor = 'e-resize';
                return handle;
                
            }
        }
    });

    function u(url) {
        return uki_mail_app.theme.imagePath + url;
    }
    
    function shadowData() {
        var prefix = "shadow/large-";
        return {
            c: [u(prefix + "c.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAACzklEQVRo3t2a63KiUBCEPYCX1U2Ixvd/Qm/kYjRBWd2aTjW950CS3fyYtaprULl8p2kGAcMg/QqR6SDTsXk/8moi041Mx+bt3WAKVDVIDOQj0ArcROCbFHzoAGbYTICzLwygC/jc8T62bGccFDKLKLUXeH2625sIpCo2mBa8bkiBWbkpo5oaQMrxFPCJ6ikxkNYAQg90Tiqk5h0DiDmeAoZqqTqIFrxuSB0uSENTQVUHkHJdnVbgN6qYrmkQ6n7U6VygRwY6Eg1pHiyDdcQcx0YZGLCvInxWyx44q+Nwi6Hh8Ng0kTqieTQ2QcCbSDzeCPB40UHqUfYAlvu9Lu0aDD0i0B+iiQnup1wfdLgNdw+mFxEG8CrwZziuB6JCT00zqQyfcn3Q4TZD7y96lrqPwL9HJkiLKygecPcK+tN0Y3VG348lMlnC8bNE5EjuXmGfLnq0+mSf4fujuh6kM8DtCUHfmG6pMry63uc4u83QDwaO+kjwB3U9SD45InD61lSS4PzU4GNxUXCNyYvFAU5XpAcTnOfI/AFeiNuIxhX0TgT3pxKXoge8lpjsyeWdqKLosOs1wIcEzgck3L6Czk0Le1/ad7O/BH826MpgNxdtTTtynQ/UFngh4DNym6HvbfqO4oKcfwYc+UZMdga7FviKss7gdbB45NJNAA637wl8QXFBzsfSz7vAccLZ00EJt9dU4TofpOgup0AbLKSbICYAZiEu3NM/6zh6NmKyFm0oLtxdWo5z/8ZJpiTwpYDPxfGvgsPxrUCvCLyik9J7P1dw7igAB+zStDDw8h+BVwa+MeAVDQDg3FmS4NxR5gTN9TvA1wS9opxrZ+kFL6mbLEnfDb6iqGzJ8f8f3F1UXB6cLtuhyxOQy1O+2x9Zbn/Wur2QcHvp5vZi2e3tCbc3hNzegnN709P1bWaXN/bdPkpx/fDK9eNCtw9oXT8Sd/MnhF+iLpLibpmRrgAAAABJRU5ErkJggg==", u(prefix + "c.gif")],
            v: [u(prefix + "v.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAECAYAAADxjg1nAAAAWklEQVQYGdXBWwpAQAAAwLEeSUqy9z/hSkpSnh9OsTMFGlSo0aJDjwEjJkREREwYMaBHhxY1KpQIKPxePLhx4cSBHRtWLJiRkJAwY8GKDTsOnLiCTAWZCjL1AeihFg5/1kytAAAAAElFTkSuQmCC", u(prefix + "v.gif")],
            h: [u(prefix + "h.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAuCAYAAAAPxrguAAAAe0lEQVQoz5XSWwtAQBCG4XEMOST+/y8kOYScKRe8WzZbc7FPX7PNtLaIuPI49l0vUBIewT/LuO/7BRETMRMpExkh/w9KD+WVhBASAu20jnZjFsEkGAQh7ISNsBIWwkwYCT2hI9SEilASiv+g9KgEH6ZhomVi0E47fW7sAEmnGr/QVlzBAAAAAElFTkSuQmCC", u(prefix + "h.gif")],
            m: [u(prefix + "m.png"), "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEUlEQVQIHWNgYGD4i4ZJFQAAAkoP0RsgosoAAAAASUVORK5CYII=", u(prefix + "m.gif"), true]
        };
    };
    
    uki_mail_app.theme.backgrounds['toolbar-button-full-disabled'] = uki_mail_app.theme.backgrounds['toolbar-button-full-normal'];
    uki_mail_app.theme.backgrounds['toolbar-button-left-disabled'] = uki_mail_app.theme.backgrounds['toolbar-button-left-normal'];
    uki_mail_app.theme.backgrounds['toolbar-button-right-disabled'] = uki_mail_app.theme.backgrounds['toolbar-button-right-normal'];
    uki_mail_app.theme.backgrounds['toolbar-button-mid-disabled'] = uki_mail_app.theme.backgrounds['toolbar-button-mid-normal'];

    uki.theme.register(uki_mail_app.theme);
})();
