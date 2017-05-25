package com.pbreactnative;

import android.graphics.Color;
import android.support.annotation.Nullable;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ReactImageView;
import com.facebook.react.views.text.ReactTextView;

/**
 * Created by Hjord on 05/05/2017.
 */

public class TestViewManager extends SimpleViewManager<ReactTextView> {
    @Override
    public String getName() {
        return "TestView";
    }

    @Override
    public ReactTextView createViewInstance(ThemedReactContext context) {
        return new ReactTextView(context);
    }

    @ReactProp(name = "text")
    public void setText(ReactTextView view, @Nullable String text){
        view.setText(text);
    }

     @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(ReactTextView view, @Nullable String backgroundColor){
         view.setBackgroundColor(Color.parseColor(backgroundColor));
     }
}
