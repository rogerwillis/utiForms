


//FORM LOGIC ------------------------------------------------
   $(document).ready(function () {

		

            /*DOB Toggle*/
            $('select[name="dobDay"],select[name="dobMonth"],select[name="dobYear"]').change(function () {

                var day = parseInt($('select[name="dobDay"]').val(), 10);
                var month = parseInt($('select[name="dobMonth"]').val(), 10);
                var year = parseInt($('select[name="dobYear"]').val(), 10);

                if (day > 0 && month > 0 && year > 1900) {
                    month--; //month is 0-based in Date(year, month, day [, hour, minute, second, millisecond]);
                    var dob = new Date(year, month, day);

                    var today = new Date();
                    var dobFor20 = new Date();
                    dobFor20.setFullYear(today.getFullYear() - 20); //over 20, no highschool info required


                    if (dob > dobFor20) {


                        $(".education").fadeIn();
                        $(".military").fadeOut();

                    } else {
                        $(".education").fadeOut();
                        $(".military").fadeIn();

                    }

                }



            });

            $("#zipCodePre,#txtCityPre,#ddlStatePre,#ddlCountryPre").change(function () {
                console.log("Changed");
                $("#zipCode").val($("#zipCodePre").val());
                $("#txtCity").val($("#txtCityPre").val());
                $("#ddlState").val($("#ddlStatePre").val());
                $("#ddlCountry").val($("#ddlCountryPre").val());

            });


            $("#zipCode,#txtCity,#ddlState,#ddlCountry").change(function () {
                console.log("Changed");
                $("#zipCodePre").val($("#zipCode").val());
                $("#txtCityPre").val($("#txtCity").val());
                $("#ddlStatePre").val($("#ddlState").val());
                $("#ddlCountryPre").val($("#ddlCountry").val());

            });

            /*Military Toggle*/
            $(".isMilitary input:radio").change(function () {

                var militaryStatus = $(this).val();

                if (militaryStatus == "true") {
                    $(".militarySeparation,.militaryInstallationOrBase").fadeIn();
                } else {
                    $(".militarySeparation,.militaryInstallationOrBase").fadeOut();
                }


            });

            $('select[name="EducationLevel"]').change(function () {

                if ($(this).val() == "HS Grad") {
                    $(".gradDate").fadeIn();
                } else {
                    $(".gradDate").fadeOut();
                }

            });

            $('select[name="GradDate[year]"]').change(function () {

                if ($(this).val() != "" && $("#gradMonth").val() != "") {

                    $(".hsState,.hsCity").fadeIn();
                } else {
                    $(".hsState,.hsCity").fadeOut();
                }
            });
            $('select[name="HighSchoolState"],select[name="HighSchoolCity"]').change(function () {
                if ($('select[name="HighSchoolState"]').val() != "" && $('select[name="HighSchoolCity"]').val() != "") {

                    $(".hsName").fadeIn();
                } else {
                    $(".hsName").fadeOut();
                }
            });
   });